import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campground } from './campgrounds/campground.interface';

@Injectable({
  providedIn: 'root',
})
export class CampgroundsService {
  private campgroundsUrl = 'http://localhost:3000/campgrounds';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.campgroundsUrl);
  }
}
