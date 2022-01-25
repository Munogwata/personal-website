import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LogoComponent } from './reusable-components/navigation/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationBarComponent } from './reuseable-components/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MunoImageComponent } from './reusable-home-componets/muno-image/muno-image.component';
import { TagsComponent } from './reusable-home-componets/tags/tags.component';
import { HeroComponent } from './reusable-home-componets/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './reusable-home-componets/contact-form/contact-form.component';
import { ProjectOneComponent } from './projects/project-one/project-one.component';
import { NavigationLinksComponent } from './reusable-home-componets/navigation-links/navigation-links.component';
import { ProjectTwoComponent } from './projects/project-two/project-two.component';
import { ProjectThreeComponent } from './projects/project-three/project-three.component';
import { SmallProjectCardsComponent } from './reusable-home-componets/small-project-cards/small-project-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    AboutComponent,
    NavigationBarComponent,
    MunoImageComponent,
    TagsComponent,
    HeroComponent,
    ContactComponent,
    ContactFormComponent,
    ProjectOneComponent,
    NavigationLinksComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    SmallProjectCardsComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
