import { ProjectService } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project.model';
import { ExpertService } from '../../services/expert/expert.service';
import { OPTIONS } from 'src/app/models/typeOptions';
@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.scss'],
})
export class PublishListComponent implements OnInit {
  type: any;
  openFilter = -1;
  steps = 10;
  viewType = 0;
  projects: Project;
  category: string = '';
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
  user:any;
  //variables filtros
  min = 0;
  max = 10000000;
  address: string = '';
  rooms: any = 0;
  baths: any = 0;
  areamin = 0;
  areamax = 100000;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private toastr: ToastrService,
    private Project: ProjectService,
    private Expert: ExpertService
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
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    if (this.type == 5) {
      this.getServices();
      this.getExperts(
        this.address,
        this.category,
        this.type_verification,
        this.company,
        this.emergency
      );
    }
      if(this.type == 1){
        if(this.user){
          this.searchProduct(1, this.user.id);
        }else{
          this.searchProduct(1, null);
        }
      }
      if(this.type == 2){
        if(this.user){
          this.searchProduct(2, this.user.id);
        }else{
          this.searchProduct(2, null);
        }
      }
      if(this.type == 3){
        this.getShared_spaces();
      }
      if(this.type == 4){
        this.getProject();
      }
  }

  searchProduct(type, user_id) {
    this.load = 1;
    this.service.searchProduct(type, user_id, this.address, this.min, this.max, this.rooms, this.baths, this.areamin, this.areamax).subscribe(
      (data : any) => {
        this.projects = data.products;
        this.load = 0;
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }
  getShared_spaces() {
    this.load = 1;
    console.log("entro");
    this.service.getShared().subscribe(
      (data : any) => {
        this.projects = data.shared_spaces;
        console.log(data);
        this.load = 0;
      },
      (err) => {
        this.toastr.error('Error al realizar al consulta.');
      }
    );
  }
  getProject() {
    this.load = 1;
    console.log("entro");
    this.service.getProject().subscribe(
      (data : any) => {
        this.projects = data.project;
        console.log(data);
        this.load = 0;
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
    console.log(this.area);
  }
  setPrice(min, max) {
    this.price.min = min;
    this.price.max = max;
    console.log(this.price);
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
