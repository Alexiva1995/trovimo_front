import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-publish',
  templateUrl: './info-publish.component.html',
  styleUrls: ['./info-publish.component.scss']
})
export class InfoPublishComponent implements OnInit {

  page: number = 2;
  constructor() { }

  ngOnInit(): void {
  }

  setPage(i: number) {
    this.page = i
  }

  setNamePage() {
    switch (this.page) {
      case 1: return 'Publish'
      case 2: return 'Main info'
      case 3: return 'Details'
      default:
        return 'publish';
    }
  }

}
