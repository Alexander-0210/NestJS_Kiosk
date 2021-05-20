import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CmsModule } from './cms/cms.module';
import { SchemasModule } from './schemas/schemas.module';
import { ApiModule } from './api/api.module';
import { KioskapiModule } from './kioskapi/kioskapi.module';
import { PrivacypolicyModule } from './privacypolicy/privacypolicy.module';
import { SupportModule } from './support/support.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/wash'),
  CmsModule, SchemasModule, ApiModule, KioskapiModule, PrivacypolicyModule, SupportModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
