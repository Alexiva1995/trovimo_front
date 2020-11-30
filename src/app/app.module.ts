import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HttpClient, HttpClientModule} from '@angular/common/http';


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
]


@NgModule({
  declarations: [
    AppComponent,
    APP_COMPONENTS,
    PublishListComponent,
    PublishCardComponent
  ],
  imports: [
    NGX_MODULES,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
