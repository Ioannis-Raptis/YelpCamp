import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CampgroundsRoutingModule } from './campgrounds-routing.module';
import { CampgroundsComponent } from './campgrounds.component';

@NgModule({
  declarations: [CampgroundsComponent],
  imports: [CommonModule, CampgroundsRoutingModule],
  exports: [],
})
export class CampgroundsModule {}
