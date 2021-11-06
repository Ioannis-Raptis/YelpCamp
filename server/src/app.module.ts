import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampgroundsModule } from './campgrounds/campgrounds.module';

@Module({
  imports: [ConfigModule.forRoot(), CampgroundsModule, MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
    inject: [ConfigService],
  }), CampgroundsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
