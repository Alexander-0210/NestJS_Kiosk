import { Module } from '@nestjs/common';
import { UserVerifyController } from './user-verify.controller';
import { UserVerifyService } from './user-verify.service';

@Module({
  controllers: [UserVerifyController],
  providers: [UserVerifyService]
})
export class UserVerifyModule {}
