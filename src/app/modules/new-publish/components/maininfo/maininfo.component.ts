import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MainInfo } from '../../../../models/main-info';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from '../../../../services/map/map.service';
import { Plans } from '../../../../models/plans';
import { TypeProperty } from '../../../../models/type-property';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { COUNTRIES, Country } from 'src/app/models/countries.data';
import { Coordinates } from 'src/app/models/coordinates.model';

@Component({
  selector: 'app-maininfo',
  templateUrl: './maininfo.component.html',
  styleUrls: ['./maininfo.component.scss']
})
export class MaininfoComponent implements OnInit {
  @Input() type;
  @Input() optionType;
  @Input() mainInfo: MainInfo;
  @Input() images = [];
  @Input() imagesReader = [];
  @Input() videos = [];
  @Input() videosReader = [];
  @Output() setMainInfo = new EventEmitter();
  @ViewChild('places') places: GooglePlaceDirective;
  years = [];
  videoUrl: string;
  coordinates = '';
  showCoordinates = false

  latitude: number = -74.297333;
  longitude: number = 4.570868;
  zoom: number = 10;
  countries: Country[]; 
  currencies = [];


  title = 'rou';
  //Local Variable defined 
  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ['co'],
    }
  }
  constructor(
    private sanitizer: DomSanitizer, 
    private mapService: MapService
  ) { 
    
  }

  ngOnInit(): void {
    this.mainInfo.lat = this.latitude;
    this.mainInfo.lon = this.longitude;
    this.getYearBuilt();
    this.coordinates = this.mainInfo.lon + ',' + this.mainInfo.lat;
    this.getLocation();
    this.countries = COUNTRIES;
    this.countries.forEach(country =>{
      if (this.currencies.find(element => element == country.currencyCode)) {
      } else {
        let aux = country.currencyCode;
        this.currencies.push(aux);
      }
    });
  }

  public AddressChange(address: any) {
    //setting address from API to local variable 
    this.latitude = address.geometry.location.lng();
    this.longitude = address.geometry.location.lat();
    this.zoom = 18;
    this.mainInfo.city = address.formatted_address;
    const aux = address.address_components;
    const postalCode = aux.find(ejm => ejm.types = 'postal_code');
    this.mainInfo.postal_code = postalCode.long_name;
    this.mainInfo.lat = this.latitude;
    this.mainInfo.lon = this.longitude;
    
  }

  getLocation() {
    this.mapService.getPosition().then(pos => {
        this.latitude = pos.lng;
        this.longitude = pos.lat;
        
    });
      if (!this.latitude && !this.longitude ) {
        this.latitude = 4.570868;
        this.longitude = -74.297333;
        this.zoom = 10;
      }
    
  }

  getYearBuilt(): any {
    const actualYear = new Date().getFullYear();
    for (let i = 0; i < 100; i++) {
      this.years[i] = actualYear - i;
    }
  }

  changeCountry(): void {
    this.mainInfo.city = '';
    this.mainInfo.postal_code = '';
    let code = this.countries.find(name => name.country === this.mainInfo.country);
    this.mainInfo.currency = code.currencyCode;
    this.changeConfig(code.code);
    this.emitData();
  }

  changeCurrency(): void {
    this.mainInfo.city = '';
    this.mainInfo.postal_code = '';
    let code = this.countries.find(name => name.currencyCode === this.mainInfo.currency);
    this.mainInfo.country = code.country;
    this.changeConfig(code.code);
    this.emitData();
  }

  changeConfig(country) {
    this.places.options.componentRestrictions = new ComponentRestrictions({
        country: country
    });
    this.places.reset();
  }

  addImage(files): void {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.images.push(files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imagesReader.push(reader.result);
    };
    this.emitData();
  }
  removeImage(index): void {
    this.imagesReader.splice(index, 1);
    this.images.splice(index, 1);
    this.emitData();
  }
  addVideo(files): void {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/video\/*/) == null) {
      return;
    }
    this.videos.push(files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.videosReader.push(reader.result);
    };
    this.emitData();
  }
  addVideoUrl(): void {
    if (this.videoUrl === '') {
      return;
    }
    this.videos.push(this.videoUrl);
    this.videosReader.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl.replace("watch?v=", "embed/")));
    this.videoUrl = '';
  }
  isVideoUrl(index): boolean {
    return typeof this.videos[index] === 'string';
  }
  removeVideo(index): void {
    this.videosReader.splice(index, 1);
    this.videos.splice(index, 1);
    this.emitData();
  }
  onChange(): void {
    this.checkCoordinates();
    this.emitData();
  }
  emitData(): void {

    this.setMainInfo.emit({
      mainInfo: this.mainInfo,
      images: this.images,
      videos: this.videos,
      imagesReader: this.imagesReader,
      videosReader: this.videosReader
    });
  }

  addPlans(): void {
    this.mainInfo.plans.push(new Plans());
  }
  addProperty(): void {
    this.mainInfo.typesp.push(new TypeProperty());
  }

  checkCoordinates(){
    let coordinates: Coordinates;
    this.mapService.currentMessage.subscribe(data => {
      coordinates = data;
      this.mainInfo.lat = coordinates.latitude;
      this.mainInfo.lon = coordinates.longitude;
    })
  }



}
