import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent } from './pages/team/team.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { VideosComponent } from './pages/videos/videos.component';
import { BannercontactComponent } from './share/bannercontact/bannercontact.component';
import { FactCounterComponent } from './components/fact-counter/fact-counter.component';
import { UpdatedServicesSectionComponent } from './components/updated-services-section/updated-services-section.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesPageSectionComponent } from './components/services-page-section/services-page-section.component';
import { ProductsPageSectionComponent } from './components/products-page-section/products-page-section.component';
import { GallerySectionComponent } from './components/gallery-section/gallery-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ServiceComponent,
    TeamComponent,
    GaleriaComponent,
    VideosComponent,
    BannercontactComponent,
    FactCounterComponent,
    UpdatedServicesSectionComponent,
    AboutUsComponent,
    ServicesPageSectionComponent,
    ProductsPageSectionComponent,
    GallerySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
