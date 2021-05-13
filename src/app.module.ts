import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CmsController } from './cms/cms.controller';
import { CmsModule } from './cms/cms.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/wash'), CmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
