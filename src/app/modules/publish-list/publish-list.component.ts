import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.scss']
})
export class PublishListComponent implements OnInit {
  type: any;
  openFilter = -1;
  min = 0;
  max = 100;
  steps = 1;
  constructor(private route: ActivatedRoute) {
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type)
  }

  ngOnInit(): void {
  }

}
