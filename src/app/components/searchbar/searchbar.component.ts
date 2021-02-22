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
  maxP = 999999999;
  stepsP = 1000;
  options = OPTIONS;
  showFilter = false;
  activeFilter = 0;
  type = 1;

  filters: Filters;
  
  latitude: number;
  longitude: number;

  formattedaddress = "";
  optionsAddress = {
    componentRestrictions: {
      country: [],
    }
  }

  constructor(private router: Router,
              private searchService: SearchService) { }

  ngOnInit(): void {

    this.filters = {
      type: 0,
      price: {
        min: null,
        max: null
      },
      area: {
        min: null,
        max: null
      },
      rooms: 0,
      baths: 0
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
  }

  addTypeValue(id: number, type:string){
    this.filters[type] = id;
  }

  addMinMaxValues(min: number, max: number, type: string){
    this.filters[type].min = min;
    this.filters[type].max = max;
  }

  search(){

    const data = [this.formattedaddress, this.filters];
    console.log(data);
    this.searchService.setFilters(data);
    this.router.navigate(['/publish-list/',this.type]);
  }
}
