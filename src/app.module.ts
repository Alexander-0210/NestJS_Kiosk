import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CmsModule } from './cms/cms.module';
import { SchemasModule } from './schemas/schemas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/wash'),
  CmsModule, SchemasModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
