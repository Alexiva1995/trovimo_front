import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  TYPE_OPTIONS = [
    {
      title: 'House',
      image: ''
    },
    {
      title: 'Apartment',
      image: ''
    },
    {
      title: 'Land',
      image: ''
    },
    {
      title: 'Chalet',
      image: ''
    },
    {
      title: 'Warehouse',
      image: ''
    },
    {
      title: 'Parking',
      image: ''
    },
    {
      title: 'Commercial space',
      image: ''
    },
    {
      title: 'Medical space',
      image: ''
    },
    {
      title: 'Tiny House',
      image: ''
    },
    {
      title: 'Office',
      image: ''
    },
    {
      title: 'Other',
      image: ''
    }
  ];

  min = 0;
  max = 10;
  steps = 2;
  showFilter = false;
  activeFilter = 0;
  constructor() { }

  ngOnInit(): void {
  }


}
