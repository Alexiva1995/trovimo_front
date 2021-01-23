import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BUILDING_OPTIONS, HOME_DETAILS_OPTIONS, PLACE_DETAILS_OPTIONS, PLACE_EQUIPMENT_OPTIONS, PREFERENCES_OPTIONS} from './checkoptions';
import {DetailInfo} from '../../../../models/detail-info';
import {Professional} from '../../../../models/professional';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Input() type;
  @Input() optionType;
  @Input() detail: DetailInfo;
  @Output() setDetailInfo = new EventEmitter<any>();
  homeDetails = HOME_DETAILS_OPTIONS;
  buildingDetails = BUILDING_OPTIONS;
  placeDetails = PLACE_DETAILS_OPTIONS;
  placeEquipment = PLACE_EQUIPMENT_OPTIONS;
  preferences = PREFERENCES_OPTIONS;
  homeInput: string;
  buildingInput: string;
  serviceName = '';
  servicePrice = 0;
  referencePoint = '';
  referenceName = '';
  placeEquipmentInput = '';
  preferencesInput = '';
  constructor() {
    this.homeInput = '';
    this.buildingInput = '';
  }

  ngOnInit(): void {

  }
  emitData(skip): void {
    this.setDetailInfo.emit({data:this.detail,skip });
  }
  addHomeTags(): void {
    if (this.homeInput !== '') {
      const option = this.homeDetails.find(a => a.toLowerCase() === this.homeInput.toLowerCase())
      if (option) {
        this.detail.homeDetailsTags.push(option);
        this.homeInput = '';
      }
    }
    this.emitData(false);
  }
  removeHomeTags(index): void {
    this.detail.homeDetailsTags.splice(index, 1);
    this.emitData(false);
  }
  onChangeDetails(event): void {
    const value = event.target.value;
    const index = this.detail.homeDetailsTags.findIndex(a => a === value);
    if (index >= 0) {
      this.detail.homeDetailsTags.splice(index, 1);
    } else {
      this.detail.homeDetailsTags.push(value);
    }
    this.emitData(false);
  }
  /* building */
  addBuildingTags(): void {
    if (this.buildingInput !== '') {
      const option = this.buildingDetails.find(a => a.toLowerCase() === this.buildingInput.toLowerCase())
      if (option) {
        this.detail.buildingTags.push(option);
        this.buildingInput = '';
      }
    }
    this.emitData(false);
  }
  onChangeBuilding(event): void {
    const value = event.target.value;
    const index =this.detail.buildingTags.findIndex(a => a === value);
    if (index >= 0) {
      this.detail.buildingTags.splice(index, 1);
    } else {
      this.detail.buildingTags.push(value);
    }
    this.emitData(false);
  }
  removeBuildingTags(index): void {
    this.detail.buildingTags.splice(index, 1);
    this.emitData(false);
  }
  /*  */
  isChecked(nameVar, value): boolean {
    return this.detail[nameVar].find(a => a === value);
  }
  /* SERVICES */
  addService(): void {
    if (this.serviceName !== '') {
      this.detail.services.push([this.serviceName,this.servicePrice]);
      this.serviceName = '';
      this.servicePrice = 0;
    }
    this.emitData(false);
  }
  removeService(index): void {
    this.detail.services.splice(index, 1);
    this.emitData(false);
  }
  /* REFERENCE POINTS */
  addReference(): void {
    if (this.referencePoint !== '') {
      this.detail.reference_points.push([this.referencePoint, this.referenceName]);
      this.referencePoint = '';
      this.referenceName = '';
    }
    this.emitData(false);
  }
  removeReference(index): void {
    this.detail.reference_points.splice(index, 1);
    this.emitData(false);
  }
  addProfessional(): void {
    this.detail.professional_groups.push(new Professional());
  }
  /* place equipment */
  addPlaceEquipment(): void {
    if (this.placeEquipmentInput !== '') {
      const option = this.homeDetails.find(a => a.toLowerCase() === this.placeEquipmentInput.toLowerCase());
      if (option) {
        this.detail.placeDetailsTags.push(option);
        this.placeEquipmentInput = '';
      }
    }
    this.emitData(false);
  }
  removePlaceEquipment(index): void {
    this.detail.placeEquipmetsTags.splice(index, 1);
    this.emitData(false);
  }
  onChangePlaceEquipment(event): void {
    const value = event.target.value;
    const index = this.detail.placeEquipmetsTags.findIndex(a => a === value);
    if (index >= 0) {
      this.detail.placeEquipmetsTags.splice(index, 1);
    } else {
      this.detail.placeEquipmetsTags.push(value);
    }
    this.emitData(false);
  }
  /*  */
  addPreferences(): void {
    if (this.preferencesInput !== '') {
      const option = this.preferences.find(a => a.toLowerCase() === this.preferencesInput.toLowerCase());
      if (option) {
        this.detail.preferencesTags.push(option);
        this.preferencesInput = '';
      }
    }
    this.emitData(false);
  }
  removePreferenceTags(index): void {
    this.detail.preferencesTags.splice(index, 1);
    this.emitData(false);
  }
  onChangePreference(event): void {
    const value = event.target.value;
    const index = this.detail.preferencesTags.findIndex(a => a === value);
    if (index >= 0) {
      this.detail.preferencesTags.splice(index, 1);
    } else {
      this.detail.preferencesTags.push(value);
    }
    this.emitData(false);
  }
}
