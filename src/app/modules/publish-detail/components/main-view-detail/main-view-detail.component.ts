import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {DetailsViewService} from '../../../../services/details-view/details-view.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


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


  constructor(private DetailsService: DetailsViewService ,
              private router: Router,     
              private domsegunridad:DomSanitizer
    ) { }

  ngOnInit(): void {
    this.getData()
  }

  favorite(){
    this.DetailsService.Favorite('1', 'contact').subscribe(resp=>{
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

  async getData(){
    const data = {
      product_id:'3' 
    }
    
    this.products =  await this.DetailsService.Show(data, 'show-product').toPromise()
    this.products = this.products.products[0]
    this.photos = JSON.parse(this.products.photos)
    console.log(this.products)
    const video = JSON.parse(this.products.videos)[0]
    this.videoURL = this.domsegunridad.bypassSecurityTrustResourceUrl(video);
    console.log(this.videoURL)

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




}
