import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FirstTemplateComponent } from "./components/cv-templates/first-template/first-template.component";
import { PreviewFirstTemplateComponent } from "./components/cv-templates/first-template/preview-first-template/preview-first-template.component";
import { SecondTemplateComponent } from "./components/cv-templates/second-template/second-template.component";
import { PreviewSecondTemplateComponent } from "./components/cv-templates/second-template/preview-second-template/preview-second-template.component";
import { ThirdTemplateComponent } from "./components/cv-templates/third-template/third-template.component";
import { PreviewThirdTemplateComponent } from "./components/cv-templates/third-template/preview-third-template/preview-third-template.component";
import { HomeComponent } from "./components/home/home.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { AuthGuard } from "./services/auth.guard";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "header",
    component: HeaderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "first-template",
    component: FirstTemplateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "first-template/preview-first-template",
    component: PreviewFirstTemplateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "second-template",
    component: SecondTemplateComponent
  },
  {
    path: "second-template/preview-second-template",
    component: PreviewSecondTemplateComponent
  },
  {
    path: "third-template",
    component: ThirdTemplateComponent
  },
  {
    path: "third-template/preview-third-template",
    component: PreviewThirdTemplateComponent
  },
  {
    path: "callback",
    component: CallbackComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
