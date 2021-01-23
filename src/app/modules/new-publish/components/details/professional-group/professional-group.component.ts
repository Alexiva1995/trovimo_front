import {Component, Input, OnInit} from '@angular/core';
import {Professional} from '../../../../../models/professional';

@Component({
  selector: 'app-professional-group',
  templateUrl: './professional-group.component.html',
  styleUrls: ['./professional-group.component.scss']
})
export class ProfessionalGroupComponent implements OnInit {
  @Input() professional: Professional;
  imagesReader = [];
  constructor() { }

  ngOnInit(): void {
  }
  addImage(files): void {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.professional.photo.push(files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imagesReader.push(reader.result);
    };
  }
  removeImage(index): void {
    this.imagesReader.splice(index, 1);
    this.professional.photo.splice(index, 1);
  }
}
