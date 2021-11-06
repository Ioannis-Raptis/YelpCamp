import { Controller, Get } from '@nestjs/common';
import { Campground } from './campground.schema';
import { CampgroundsService } from './campgrounds.service';

@Controller('campgrounds')
export class CampgroundsController {
    constructor (private campgroundsService: CampgroundsService) {}

    @Get()
    findAll(): Promise<Campground[]> {
      return this.campgroundsService.findAll();
      
    }
}
