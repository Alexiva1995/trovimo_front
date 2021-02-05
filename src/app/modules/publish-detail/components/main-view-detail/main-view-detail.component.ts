import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {DetailsViewService} from '../../../../services/details-view/details-view.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main-view-detail',
  templateUrl: './main-view-detail.component.html',
  styleUrls: ['./main-view-detail.component.scss']
})
export class MainViewDetailComponent implements OnInit {
  products:any
  photos:any 
  video:boolean
  image:boolean = true;
  map:boolean;
  videoURL:SafeResourceUrl;
  type:string;
  id:string;
  product:boolean
  shared_space:boolean
  project_id:boolean
 

  constructor(private DetailsService: DetailsViewService ,
              private router: Router,     
              private route: ActivatedRoute,
              private domsegunridad:DomSanitizer
    ) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData(this.type, this.id)
    console.log(this.type)
    if(this.type == "product_id"){
      this.selectionProject(0)
    }
    if(this.type == "shared_space_id"){

      this.selectionProject(1)
    }
    if(this.type == "project_id"){
      this.selectionProject(2)
    }
  }

  favorite(){
    const data = new Object()
    data[`${this.type}`] = this.id

    this.DetailsService.Favorite(data, 'favorite').subscribe(resp=>{
      console.log(resp)
       Swal.fire({
         title: 'Your message has been sended successfully',
         icon: 'success'
       });
     },err =>{
       Swal.fire({
         title: 'An error occurred, please try again later',
         icon: 'error'
       });
     })
  }

  async getData(type,param){
    const data = new Object()
    data[`${type}`] = param
    if(this.type == "product_id"){
      this.products =  await this.DetailsService.Show(data, 'show-product').toPromise()
    
      this.products = this.products.products[0]
      this.photos = JSON.parse(this.products.photos)
      console.log(this.products)
      const video = JSON.parse(this.products.videos)[0]
      this.videoURL = this.domsegunridad.bypassSecurityTrustResourceUrl(video);
      console.log(this.videoURL)
    }

    if(this.type == "shared_space_id"){
      this.products =  await this.DetailsService.Show(data, 'show-shared-space').toPromise()
      this.products = this.products.shared_spaces[0]
      this.photos = JSON.parse(this.products.photos)
      console.log(this.products)
      const video = JSON.parse(this.products.videos)[0]
      this.videoURL = this.domsegunridad.bypassSecurityTrustResourceUrl(video);
      console.log(this.videoURL)
    }


    if(this.type == "project_id"){
      this.products =  await this.DetailsService.Show(data, 'show-project').toPromise()
      this.products = this.products.products[0]
      this.photos = JSON.parse(this.products.photos)
      console.log(this.products)
      const video = JSON.parse(this.products.videos)[0]
      this.videoURL = this.domsegunridad.bypassSecurityTrustResourceUrl(video);
      console.log(this.videoURL)
    }


    
  }

  print(){
    window.print();
  }

  shared(){
    Swal.fire({
      title: 'You copied the url',
      icon: 'success'
    });
    navigator.clipboard.writeText(document.location.href)
  }



  selection(value){
    switch (value) {
       case 0:
        this.video = false
        this.image= true;
        this.map = false;
         break;
       case 1:
        this.video = true
        this.image= false;
        this.map = false;

         break;
       case 2:
        this.video = false
        this.image= false;
        this.map = true;

         break;

       default:
         break;
     }
  }

  goto(url){
    window.open(url,'_blank')
  }


  selectionProject(value){
    switch (value) {
       case 0:
        this.product = true
        this.shared_space = false
        this.project_id = false
         break;
       case 1:
        this.product = false
        this.shared_space = true
        this.project_id = false
         break;
       case 2:
        this.product = false
        this.shared_space = false
        this.project_id = true
         break;
       default:
         break;
     }
  }


}
