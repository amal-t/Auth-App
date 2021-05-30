import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { AuthGuard } from "./shared/auth.guard";
@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
