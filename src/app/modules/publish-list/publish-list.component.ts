import { ProjectService } from './../../services/project/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project.model';
import { ExpertService } from '../../services/expert/expert.service';
import { OPTIONS } from 'src/app/models/typeOptions';
import { ClickOutsideModule } from 'ng-click-outside';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.scss'],
})
export class PublishListComponent implements OnInit {
  type: number;
  openFilter = -1;
  steps = 10;
  viewType = 0;
  projects: Project;
  // category: string = '';
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
  contador:number = 1
  //variables filtros
  location:any;
  min = 0;
  max = 1000;
  address: string = '';
  rooms: any = "";
  baths: any = "";
  areamin = 0;
  areamax = 100000;
  filtertype = 0;
  furnished:any="";
  // category se convierte en un arreglo. 
  category:any = "";
  // category: number[] = [1,5];
  categorytemp:any = new Set()
  builds:any = [];
  buildsTemp:any = [];
  home_details:any = [];
  home_detailsTemp:any = [];
  condition:any = "";
  pieces:any = "";
  ListedBy:any = "";
  parking:any = "";
  operation:any = "";
  order:any = "R_A";
  // 1 o 0 virtual tour
  tour:any = "";
  yearmin:any = "";
  yearmax:any = "";
  // asignar los valores a una ruta en building
  // {{base_url}}/api/auth/services/optional-options
  // arreglos de checbox
  // home_details
  //building_details



  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private toastr: ToastrService,
    private Expert: ExpertService
  ) {
    this.type = parseFloat(this.route.snapshot.paramMap.get('type'));
    this.filter.option = parseFloat(this.route.snapshot.paramMap.get('option'));

    this.filter.type = this.type;
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

      this.getOptions()
      console.log(      "usuario"    + this.user.id)
  }

  searchProduct(type?, user_id? ) {
    Swal.fire({
      background: 'transparent',
    })

    type = this.type
    user_id = this.user.id
    

    Swal.showLoading();
    this.load = 1;
    console.log("ejecutar buscar",this.areamin , this.areamax)
    this.service.searchProduct(type, user_id, this.address, this.min, this.max, this.rooms, this.baths, this.areamin, this.areamax,
      this.furnished,this.category,this.ListedBy , this.condition,this.pieces,this.parking,this.operation,this.order,
      this.tour,this.yearmin,this.yearmax,this.buildsTemp,this.home_detailsTemp).subscribe(
    (data : any) => {
     console.log(data)
    Swal.close()
     this.projects = data.products;
   this.load = 0;
    },
   (err) => {
     Swal.close()
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
    
    this.areamin = min;
    this.areamax = max;

    console.log(this.area);
  }
  setPrice(min, max) {
    this.price.min = min;
    this.price.max = max;

    this.min = min;
    this.max = max

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

  getSharedSpace() {
    this.service.getSharedSpace(this.filter).subscribe(
      (res: any) => {
        this.projects = res.shared_spaces;
      },
      (err) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }

  getProducts() {
    this.service.searchProducts(this.filter).subscribe(
      (res: any) => {
        this.projects = res.shared_spaces;
      },
      (err) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }
  getOptions() {
    this.service.getOptions().subscribe(
      (res: any) => {
        this.builds = res.builds
        this.home_details = res.home_details

        console.log("contruciones" , this.builds)
        console.log("casas", this.home_details)
      },
      (err) => {
        console.log('Ha Ocurrido un error inesperado.');
      }
    );
  }


  locationsearch(){
      console.log(this.address)
      if(this.address.length < 1){
        return
      }else{
        this.searchProduct()
      }
  }

  closemodal(e: Event , c?:string){
    if(this.contador > 1 ){
        if(c == 'call'){
          // se ejecuta cuando se cierra los filtros con max / min
          this.searchProduct()
        }
      console.log("cerrar")
      this.openFilter = -2;
      this.contador = 1
    }else{
      const {type} = e
        if(type == 'click'){
          this.contador++
        }
    }
  
  }
  closemodalprice(e: Event , c?:string){
    if(this.contador > 1 ){
        if(c == 'call'){
          // se ejecuta cuando se cierra los filtros con max / min
          this.searchProduct(this.min , this.max)
        }
      console.log("cerrar")
      this.min = 0;
      this.max = 1000;
      this.openFilter = -2;
      this.contador = 1
    }else{
      const {type} = e
        if(type == 'click'){
          this.contador++
        }
    }
  
  }

  closemodalarea(e: Event , c?:string){
    if(this.contador > 1 ){
        if(c == 'call'){
          // se ejecuta cuando se cierra los filtros con max / min
          this.searchProduct(this.areamin , this.areamax)
        }
      console.log("cerrar")
      this.areamin = 0;
      this.areamax = 100000;
      this.openFilter = -2;
      this.contador = 1
    }else{
      const {type} = e
        if(type == 'click'){
          this.contador++
        }
    }
  
  }

  closemodalfilter(e){
    console.log(e)
    this.categorytemp.add(e)
    console.log(this.categorytemp)
    this.category = [...this.categorytemp]
    console.log("arreglo",this.category)
  }

  closemodaltype(e: Event , c?:string){

    if(this.contador > 1 ){
      if(this.category.length < 1){
        this.openFilter = -2;
        this.contador = 1
      }else{       
        this.searchProduct()
        console.log("cerrar")
        this.openFilter = -2;
        this.contador = 1
      }
  }else{
    const {type} = e
      if(type == 'click'){
        this.contador++
      }
  }

  }

  closemodalmorefilters(e: Event , c?:string){

    if(this.contador > 1 ){
    this.searchProduct()
    // console.log("cerrar")
    this.openFilter = -2;
    this.contador = 1
    console.log("more filters")
  }else{
    const {type} = e
      if(type == 'click'){
        this.contador++
      }
  }

  }


  collectMoreFilter(value ,event){
    console.log( value ,  '/' ,event.target.checked)
      if(event.target.checked){
        this.home_detailsTemp.push(value)
      }else{
        this.home_detailsTemp.splice(this.home_detailsTemp.indexOf(value), 1); 
      }

      console.log(this.home_detailsTemp)
  }

  collectMoreFilter2(value ,event){
    console.log( value ,  '/' ,event.target.checked)
      if(event.target.checked){
        this.buildsTemp.push(value)
      }else{
        this.buildsTemp.splice(this.buildsTemp.indexOf(value), 1); 
      }

      console.log(this.buildsTemp)
  }

}
