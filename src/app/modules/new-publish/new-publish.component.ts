import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-publish',
  templateUrl: './new-publish.component.html',
  styleUrls: ['./new-publish.component.scss']
})
export class NewPublishComponent implements OnInit {
  page = 1;
  type = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setPage(i: number) {
    this.page = i;
  }

  setNamePage() {
    switch (this.page) {
      case 1: return 'Publish';
      case 2: return 'Main info';
      case 3: return 'Details';
      default:
        return 'publish';
    }
  }
}
