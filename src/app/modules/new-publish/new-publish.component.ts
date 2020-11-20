import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {
  page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setPage(i: number) {
    this.page = i
  }

  setNamePage() {
    switch (this.page) {
      case 1: return 'publish'
      case 2: return 'main info'
      case 3: return 'details'
      default:
        return 'publish';
    }
  }
}
