import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { HeaderComponent } from './components/header/header.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { AuthComponent } from './modules/auth/auth.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/help/about/about.component';
import { LegalComponent } from './modules/help/legal/legal.component';
import { FaqComponent } from './modules/help/faq/faq.component';
import { NewPublishComponent } from './modules/new-publish/new-publish.component';
import { DetailsComponent } from './modules/new-publish/components/details/details.component';
import { InfoComponent } from './modules/new-publish/components/info/info.component';
import { PublishComponent } from './modules/new-publish/components/publish/publish.component';
import { FindExpertsComponent } from './modules/find-experts/find-experts.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PublishListComponent } from './modules/publish-list/publish-list.component';
import { PublishCardComponent } from './component/publish-card/publish-card.component';
import { environment } from 'src/environments/environment';
import { DoubleRangeComponent } from './component/double-range/double-range.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const NGX_MODULES = [
  ModalModule.forRoot()
]

const APP_COMPONENTS = [
  HeaderComponent,
  MenuHeaderComponent,
  SignInComponent,
  SignUpComponent,
  AuthComponent,
  FooterComponent,
  SearchbarComponent,
  HomeComponent,
  AboutComponent,
  LegalComponent,
  FaqComponent,
  NewPublishComponent,
  DetailsComponent,
  InfoComponent,
  PublishComponent,
  FindExpertsComponent,
  FeedbackComponent,
  PublishListComponent,
  PublishCardComponent
]


@NgModule({
  declarations: [
    AppComponent,
    APP_COMPONENTS,
    DoubleRangeComponent,
    ProfileComponent,
    
  ],
  imports: [
    NGX_MODULES,
    CommonModule,      
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
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
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('807965019778637')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
