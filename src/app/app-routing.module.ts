import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/help/about/about.component';
import { AuthComponent } from './modules/auth/auth.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { FaqComponent } from './modules/help/faq/faq.component';
import { HomeComponent } from './modules/home/home.component';
import { LegalComponent } from './modules/help/legal/legal.component';
import { NewPublishComponent } from './modules/new-publish/new-publish.component';
import { PublishListComponent } from './modules/publish-list/publish-list.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AcountProfileComponent } from './modules/acount-profile/acount-profile.component';
import { InfoPublishComponent } from './modules/info-publish/info-publish.component';
import { FindPhotosComponent } from './modules/find-photos/find-photos.component';
import { FindExpertsComponent } from './modules/find-experts/find-experts.component';
import { PagesComponent } from './component/pages/pages.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';


const routes: Routes = [
   {path: 'pages', component: PagesComponent},
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent}
    ]
  },
  {
    path: 'acount-profile',
    component: AcountProfileComponent
  },
  {
    path: 'find-experts',
    component: FindExpertsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'publish-list/:type',
    component: PublishListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'new',
    component: NewPublishComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'legal',
    component: LegalComponent,
  },
  {
    path: 'info-publish',
    component: InfoPublishComponent,
  },
  {
    path: 'find-photos',
    component: FindPhotosComponent,
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent
  }
  /* {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', redirectTo:'',pathMatch:'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
