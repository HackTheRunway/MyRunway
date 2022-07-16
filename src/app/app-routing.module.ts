import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WardrobecamComponent } from './wardrobecam/wardrobecam.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'wardrobecam', component: WardrobecamComponent },
  { path: 'mixnmatch', component: MatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
