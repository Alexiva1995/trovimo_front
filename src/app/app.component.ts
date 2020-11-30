import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { setTheme } from 'ngx-bootstrap/utils';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trovimo';
  constructor(translate: TranslateService){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    setTheme('bs4')
  }
}
