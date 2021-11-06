import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Campground, CampgroundSchema } from './campground.schema';
import { CampgroundsController } from './campgrounds.controller';
import { CampgroundsService } from './campgrounds.service';

@Module({
  imports :[MongooseModule.forFeature([{ name: Campground.name, schema: CampgroundSchema }])],
  controllers: [CampgroundsController],
  providers: [CampgroundsService]
})
export class CampgroundsModule {}
