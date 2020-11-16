import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { AuthComponent } from './modules/auth/auth.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { FaqComponent } from './modules/faq/faq.component';
import { HomeComponent } from './modules/home/home.component';
import { LegalComponent } from './modules/legal/legal.component';

const routes: Routes = [
/*   {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'',pathMatch:'full'}, */
  {
    path:'auth',
    component:AuthComponent,
    children:[
      {path:'sign-in',component:SignInComponent},
      {path:'sign-up',component:SignUpComponent}
    ]
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'about-us',
    component:AboutComponent,
  },
  {
    path:'faq',
    component:FaqComponent,
  },
  {
    path:'legal',
    component:LegalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
