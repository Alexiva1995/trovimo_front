import { ProjectService } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project.model';
import { ExpertService } from '../../services/expert/expert.service';
import { Filters, OPTIONS } from 'src/app/models/typeOptions';
import { SearchService } from 'src/app/services/search/search.service';
@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.scss'],
})
export class PublishListComponent implements OnInit {
  type: any = null;
  openFilter = -1;
  minP = 10;
  maxP = 100000;
  minA = 10;
  maxA = 100000;
  steps = 10;
  viewType = 0;
  projects: Project;
  category: string = '';
  address: string = '';
  type_verification: any = '';
  company: string = '';
  services: any;
  experts: any;
  emergency: any = 0;
  load: any;
  filter: any = [];
  price: any = {};
  area: any = {};
  options = OPTIONS;
  filters: Filters = null;
  addressFormatted: string;
  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private toastr: ToastrService,
    private Project: ProjectService,
    private Expert: ExpertService,
    private searchService: SearchService
  ) {
    
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);

    this.route.queryParams.subscribe((params) => {
      if (params['address']) {
        this.address = params['address'];
      }
      if (params['category']) {
        this.category = params['category'];
      }
    });
  }

  ngOnInit(): void {
    this.searchService.currentMessage.subscribe(data => {
      this.filters = data[1];
      if (data[0] != "") {
        this.addressFormatted = data[0];
        this.filter.address = data[4];
      }

      if (this.filters) {
        console.log('si filtros');
        this.setFilters(this.filters);
      } else {
        console.log('no filtros');
        this.getByType();
      }
    })
  }

  setFilters(filters: Filters) {
    if (filters.area.max != null) {
      this.filter.areamin = filters.area.min;
      this.filter.areamax = filters.area.max;
      this.setArea(filters.area.min, filters.area.max);
    }
    if (filters.price.max != null) {
      this.filter.pricemin = filters.price.min;
      this.filter.pricemax = filters.price.max;
      this.setPrice(filters.price.min, filters.price.max);
    }
    if (filters.baths != null) {
      this.filter.bath = filters.baths;
    }
    if (filters.rooms != null) {
      this.filter.room = filters.rooms;
    }

    let searchType: string;
    let propertyType: string;

    switch (this.type) {
      case '1':
        searchType = 'search-product';
        propertyType = 'products';
        break;
      case '2':
        searchType = 'search-product';
        propertyType = 'products';
        break;
      case '3':
        searchType = 'search-shared-space';
        propertyType = 'shared_spaces';
        break;
      case '4':
        searchType = 'search-project';
        propertyType = 'project';
        break;
      case '5':
        searchType = 'search-expert';
        propertyType = 'experts';
        break;
      default:
        break;
    }

    console.log(this.filter);

    if (this.filter.length > 0 || this.filter) {
    console.log('si hay 2');
      
      this.service.searchByType(searchType, this.filter).subscribe(
        (res) => {
          this.projects = res[propertyType];
          console.log(this.projects);
        }
      )
    } else {
      console.log('no hay 2');
      this.getByType();
    }
  }

  getByType(){
    switch (this.type) {
      case '1':
        this.getProduct();
        break;
      case '2':
        this.getProduct();
        break;
      case '3':
        this.getShared_spaces();
        break;
      case '4':
        this.getProject();
        break;
      case '5':
        this.getServices();
        this.getExperts(
          this.address,
          this.category,
          this.type_verification,
          this.company,
          this.emergency
        );
        this.getProjects();
        break;
      default:
        break;
    }
  }

  getProjects() {
    this.service.searchProject(this.filter).subscribe(
      (res) => {
        this.projects = res.project;
        console.log(this.projects);
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }

  getProduct() {
    console.log("entro");
    this.service.getProduct().subscribe(
      (data: any) => {
        this.projects = data.products;
        console.log(data);
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }

  getShared_spaces() {
    console.log("entro");
    this.service.getShared().subscribe(
      (data: any) => {
        this.projects = data.shared_spaces;
        console.log(data);
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }
  getProject() {
    console.log("entro");
    this.service.getProject().subscribe(
      (data: any) => {
        this.projects = data.project;
        console.log(data);
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }


  getServices() {
    this.Expert.getAreas().subscribe(
      (data: any) => {
        this.services = data.areas;
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }

  show(evt) {
    console.log(evt);
  }

  setArea(min, max) {
    this.area.min = min;
    this.area.max = max;
  }

  setPrice(min, max) {
    this.price.min = min;
    this.price.max = max;
  }

  getExperts(address, category, type_verification, company, emergency) {
    this.load = 1;
    this.Expert.getExpert(
      this.address,
      this.category,
      this.type_verification,
      this.company,
      this.emergency
    ).subscribe(
      (data: any) => {
        this.experts = data.experts.data;
        this.load = 0;
      },
      (errorServicio) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }
}
