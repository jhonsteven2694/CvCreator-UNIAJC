import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AngularMaterialModule } from "./angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FirstTemplateComponent } from "./components/cv-templates/first-template/first-template.component";
import { SecondTemplateComponent } from "./components/cv-templates/second-template/second-template.component";
import { ThirdTemplateComponent } from "./components/cv-templates/third-template/third-template.component";
import { PreviewSecondTemplateComponent } from "./components/cv-templates/second-template/preview-second-template/preview-second-template.component";
import { PreviewThirdTemplateComponent } from "./components/cv-templates/third-template/preview-third-template/preview-third-template.component";
import { PreviewFirstTemplateComponent } from "./components/cv-templates/first-template/preview-first-template/preview-first-template.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { HomeComponent } from "./components/home/home.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstTemplateComponent,
    SecondTemplateComponent,
    ThirdTemplateComponent,
    PreviewSecondTemplateComponent,
    PreviewThirdTemplateComponent,
    PreviewFirstTemplateComponent,
    CallbackComponent,
    HomeComponent,
    NavBarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
