import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampgroundsComponent } from './campgrounds.component';

const routes: Routes = [
  { path: 'campgrounds', component: CampgroundsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CampgroundsRoutingModule {}
