import { Component, OnInit } from '@angular/core';
import { CampgroundsService } from '../campgrounds.service';
import { Campground } from './campground.interface';

@Component({
  selector: 'app-campgrounds',
  templateUrl: './campgrounds.component.html',
  styleUrls: ['./campgrounds.component.css'],
})
export class CampgroundsComponent implements OnInit {
  public campgrounds: Campground[] = [];

  constructor(private campgroundService: CampgroundsService) {}

  ngOnInit(): void {
    this.campgroundService.getAll().subscribe((campgroundData) => {
      this.campgrounds = campgroundData;
    });
  }
}
