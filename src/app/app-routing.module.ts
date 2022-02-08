import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AstuteComponent } from './projects/astute/astute.component';
import { MeComponent } from './projects/me/me.component';
import { ScoreComponent } from './projects/score/score.component';
import { WavyComponent } from './projects/wavy/wavy.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'About', component:AboutComponent},
  {path: 'Wavy', component:WavyComponent},
  {path: 'Personal Website', component:MeComponent},
  {path:'Score', component:ScoreComponent},
  {path:'Astute', component:AstuteComponent}
  
];

const routerOptions : ExtraOptions ={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
