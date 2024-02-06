import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:StartComponent, title:"Home"},
  {path:"about",component:HomeComponent,title:"About"},
  {path:"portfolio",component:PortfolioComponent,title:"Portfolio"},
  {path:"contact",component:ContactComponent,title:"Contact"},
  {path:"**",component:NotfoundComponent,title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
