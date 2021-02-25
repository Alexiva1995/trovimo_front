import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';
import {Filters, OPTIONS} from '../../models/typeOptions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})


export class SearchbarComponent implements OnInit {
  min = 0;
  maxA = 10;
  stepsA = 2;
  maxP = 99999;
  stepsP = 100;
  options = OPTIONS;
  showFilter = false;
  activeFilter = 0;
  type = 1;

  filters: Filters;
  
  latitude: number;
  longitude: number;

  formattedaddress = "";
  country = "";
  optionsAddress = {
    componentRestrictions: {
      country: [],
    }
  }

  constructor(private router: Router,
              private searchService: SearchService) 
  {}

  ngOnInit(): void {

    this.filters = {
      type: null,
      price: {
        min: null,
        max: null
      },
      area: {
        min: null,
        max: null
      },
      rooms: null,
      baths: null
    }

  }
  setType(i): void {
    this.type = i;
  }
  isEnable(enable): boolean {
    return (enable.indexOf(this.type) >= 0);
  }

   addressChange(address: any) {
    //setting address from API to local variable 
    this.formattedaddress = address.formatted_address;
    this.latitude = address.geometry.location.lng();
    this.longitude = address.geometry.location.lat();
    const aux = address.address_components;
    const country = aux.find(ejm => ejm.types = 'country');
    this.country = country.long_name;

  }

  addTypeValue(id: number, type:string){
    this.filters[type] = id;
  }

  addMinMaxValues(min: number, max: number, type: string){
    this.filters[type].min = min;
    this.filters[type].max = max;
  }

  search(){

    const data = [this.formattedaddress, this.filters, this.latitude, this.longitude, this.country];
    console.log(data);
    this.searchService.setFilters(data);
    this.router.navigate(['/publish-list/',this.type]);
  }
}
