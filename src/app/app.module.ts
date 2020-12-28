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
import {IvyCarouselModule} from 'angular-responsive-carousel';

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
import { PublishComponent } from './modules/new-publish/components/publish/publish.component';
import { FindExpertsComponent } from './modules/find-experts/find-experts.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PublishListComponent } from './modules/publish-list/publish-list.component';
import { PublishCardComponent } from './components/publish-card/publish-card.component';
import { DoubleRangeComponent } from './components/double-range/double-range.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReviewComponent } from './components/review/review.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ProfileAboutComponent } from './modules/profile/profile-about/profile-about.component';
import { AcountProfileComponent } from './modules/acount-profile/acount-profile.component';
import { MainInfoComponent } from './modules/acount-profile/components/main-info/main-info.component';
import { MaininfoComponent } from './modules/new-publish/components/maininfo/maininfo.component';
import { FindPhotosComponent } from './modules/find-photos/find-photos.component';
import { PagesComponent } from './component/pages/pages.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';
import { PublishDetailComponent } from './modules/publish-detail/publish-detail.component';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { MyListingsComponent } from './modules/acount-profile/components/my-listings/my-listings.component';
import { MyActivityComponent } from './modules/acount-profile/components/my-activity/my-activity.component';
import { PhotosComponent } from './modules/acount-profile/components/photos/photos.component';
import { SettingComponent } from './modules/acount-profile/components/setting/setting.component';
import { NumberSelectorComponent } from './components/number-selector/number-selector.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const NGX_MODULES = [
  ModalModule.forRoot()
];

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
  MaininfoComponent,
  PublishComponent,
  FindExpertsComponent,
  FeedbackComponent,
  PublishListComponent,
  PublishCardComponent,
  DoubleRangeComponent,
    ProfileComponent,
    ReviewComponent,
    ReviewFormComponent,
    ProfileAboutComponent,
    ProfileComponent,
    AcountProfileComponent,
    MainInfoComponent
]


@NgModule({
  declarations: [
    AppComponent,
    APP_COMPONENTS,

    FindPhotosComponent,
    PagesComponent,
    BlogComponent,
    BlogDetailComponent,
    PublishDetailComponent,
    MyListingsComponent,
    MyActivityComponent,
    PhotosComponent,
    SettingComponent,
    NumberSelectorComponent,
  ],
  imports: [
    NGX_MODULES,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    NgxSliderModule,
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
