import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MissionComponent } from './mission/mission.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonateComponent } from './donate/donate.component';
import { AttributionComponent } from './attribution/attribution.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MissionComponent,
    ResourcesComponent,
    AboutUsComponent,
    DonateComponent,
    AttributionComponent,
    ContactUsComponent,
    ContactUsSectionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
