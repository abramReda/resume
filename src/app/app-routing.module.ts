import { WorkComponent } from './componets/work/work.component';
import { AboutComponent } from './componets/about/about.component';
import { HomeComponent } from './componets/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'work',
    component:WorkComponent
  },
  {
    path:'**',
    redirectTo:'home'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
