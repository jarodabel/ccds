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
import { DiaperDriveComponent } from './diaper-drive/diaper-drive.component';
import { InventoryHomeComponent } from './inventory/inventory-home/inventory-home.component';
import { InventoryTableComponent } from './inventory/inventory-table/inventory-table.component';

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
    DiaperDriveComponent,
    InventoryHomeComponent,
    InventoryTableComponent,
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
