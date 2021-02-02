import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages and Components */
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
import { FindPhotosComponent } from './modules/find-photos/find-photos.component';
import { FindExpertsComponent } from './modules/find-experts/find-experts.component';
import { PagesComponent } from './component/pages/pages.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';
import { AuthGuard } from './guards/auth.guard';

import { SettingComponent } from './modules/acount-profile/components/setting/setting.component';
import { PhotosComponent } from './modules/acount-profile/components/photos/photos.component';
import { MyActivityComponent } from './modules/acount-profile/components/my-activity/my-activity.component';
import { MyListingsComponent } from './modules/acount-profile/components/my-listings/my-listings.component';
import { PublishDetailComponent } from './modules/publish-detail/publish-detail.component';

const routes: Routes = [
  { path: 'pages', component: PagesComponent },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
      {path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] }
    ]

  },
  {
    path: 'account-profile',
    component: AcountProfileComponent,
  },
  {
    path: 'find-experts',
    component: FindExpertsComponent,
  },
  {
    path: 'publish-list/:type/:option',
    component: PublishListComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
    path: 'publish-detail/:type/:id',
    component: PublishDetailComponent,
  },

  {
    path: 'find-photos',
    component: FindPhotosComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
