import { Module } from '@nestjs/common';
import { UserVerifyController } from './user-verify.controller';

@Module({
  controllers: [UserVerifyController]
})
export class UserVerifyModule {}
