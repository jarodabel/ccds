import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AttributionComponent } from './attribution/attribution.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  {
    path: 'attribution',
    component: AttributionComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
