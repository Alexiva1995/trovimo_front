import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acount-profile',
  templateUrl: './acount-profile.component.html',
  styleUrls: ['./acount-profile.component.scss'],
})
export class AcountProfileComponent implements OnInit {
  public menu = [
    {
      name: 'My Account',
      router: 'acount-profile',
    },
    {
      name: 'My activity',
      router: 'acount-profile/my-activity',
    },
    {
      name: 'My listing',
      router: 'acount-profile/my-listing',
    },
    {
      name: 'Photos',
      router: 'acount-profile/photos',
    },
    {
      name: 'Expert profile',
      router: 'acount-profile/expert-profile',
    },
    {
      name: 'My projects',
      router: 'acount-profile/my-projects',
    },
    {
      name: 'Statics',
      router: 'acount-profile/statics',
    },
    {
      name: 'Settings',
      router: 'acount-profile/settins',
    },
  ];
  selectedPage: string = this.menu[0].router;
  constructor() {}

  ngOnInit(): void {}
}
