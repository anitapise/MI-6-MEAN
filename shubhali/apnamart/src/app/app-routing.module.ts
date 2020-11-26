import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
const routes: Routes = [{ path: 'home', component: HomeComponent },
  {
    path: "login",
    component:UserComponent,
    children: [{ path: "", component: SigninComponent }]
  },
{
  path:"signup",
  component:UserComponent,
  children:[{path:"",component:SignupComponent}]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
