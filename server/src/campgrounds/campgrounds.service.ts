import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campground, CampgroundDocument } from './campground.schema';

@Injectable()
export class CampgroundsService {
  constructor(@InjectModel(Campground.name) private campgroundModel: Model<CampgroundDocument>) {}


  async findAll(): Promise<Campground[]> {
    return this.campgroundModel.find().exec();
  }
}
