import { Module } from '@nestjs/common';
import { PrivacypolicyService } from './privacypolicy.service';
import { PrivacypolicyController } from './privacypolicy.controller';

@Module({
  providers: [PrivacypolicyService],
  controllers: [PrivacypolicyController]
})
export class PrivacypolicyModule {}
