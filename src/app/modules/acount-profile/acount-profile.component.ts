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
      router: 'account-profile',
    },
    {
      name: 'My activity',
      router: 'account-profile/my-activity',
    },
    {
      name: 'My listing',
      router: 'account-profile/my-listing',
    },
    {
      name: 'Photos',
      router: 'account-profile/photos',
    },
    {
      name: 'Expert profile',
      router: 'account-profile/expert-profile',
    },
    {
      name: 'My projects',
      router: 'account-profile/my-projects',
    },
    {
      name: 'Statics',
      router: 'account-profile/statics',
    },
    {
      name: 'Settings',
      router: 'account-profile/settigs',
    },
  ];
  selectedPage: string = this.menu[0].router;
  constructor() {}

  ngOnInit(): void {}
}
