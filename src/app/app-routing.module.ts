import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { FirstTemplateComponent } from './components/cv-templates/first-template/first-template.component';
import { PreviewFirstTemplateComponent } from './components/cv-templates/first-template/preview-first-template/preview-first-template.component';
import { SecondTemplateComponent } from './components/cv-templates/second-template/second-template.component';
import { PreviewSecondTemplateComponent } from './components/cv-templates/second-template/preview-second-template/preview-second-template.component';
import { ThirdTemplateComponent } from './components/cv-templates/third-template/third-template.component';
import { PreviewThirdTemplateComponent } from './components/cv-templates/third-template/preview-third-template/preview-third-template.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
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
  },
  {
    path: 'first-template/preview-first-template',
    component: PreviewFirstTemplateComponent
  },
  {
    path: 'second-template',
    component: SecondTemplateComponent
  },
  {
    path: 'second-template/preview-second-template',
    component: PreviewSecondTemplateComponent
  },
  {
    path: 'third-template',
    component: ThirdTemplateComponent
  },
  {
    path: 'third-template/preview-third-template',
    component: PreviewThirdTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
