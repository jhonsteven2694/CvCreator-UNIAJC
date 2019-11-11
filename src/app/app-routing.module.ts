import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { FirstTemplateComponent } from './components/cv-templates/first-template/first-template.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'first-template',
    component: FirstTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
