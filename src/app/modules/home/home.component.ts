import { Component, OnInit } from '@angular/core';
import SERVICES from './services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services = SERVICES;
  constructor() { }

  ngOnInit(): void {
  }

}
