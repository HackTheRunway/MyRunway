import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WardrobecamComponent } from './wardrobecam/wardrobecam.component';
import { MatchComponent } from './match/match.component';
import { ViewWardrobeComponent } from './view-wardrobe/view-wardrobe.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'wardrobecam', component: WardrobecamComponent },
  { path: 'mixnmatch', component: MatchComponent },
  { path: 'viewwardrobe', component: ViewWardrobeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
