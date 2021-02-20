import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import APP_COMPONENTS from './components';
import { RouterModule } from '@angular/router';
import { ProfessionalGroupComponent } from './modules/new-publish/components/details/professional-group/professional-group.component';
import { ProjectCardComponent } from './modules/profile/project-card/project-card.component';

import { SafeHtmlPipe } from './pipe/safe-html.pipe';

import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ClickOutsideModule } from 'ng-click-outside';


// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const NGX_MODULES = [ModalModule.forRoot()];
const BOOSTRAP = [TooltipModule.forRoot()];

@NgModule({
  declarations: [
    APP_COMPONENTS,
    AppComponent,
    ProfessionalGroupComponent,
    ProjectCardComponent,
    SafeHtmlPipe,
  ],
  imports: [
    NGX_MODULES,
    BOOSTRAP,
    CommonModule,
    RouterModule,
    BrowserModule,
    ClickOutsideModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    NgxSliderModule,
    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdsfrCn5LZZYIw9dyPGVXPFTFbKmaKUOI', //'AIzaSyDXJWjchrU7uMEk_PvKG4b9hmI3p3rEaYU',
      libraries: ['places']    
   }),
   GooglePlaceModule
   
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '63126014045-cov6re06h38audhm3svsuv3d8vuu1p68.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('929568467790273'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
