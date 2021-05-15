import { Module } from '@nestjs/common';
import { UserVerifyController } from './user-verify.controller';
import { UserVerifyService } from './user-verify.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserVerifySchema, UserVerify } from './schema/user-verify.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: UserVerify.name, schema: UserVerifySchema }])],
  controllers: [UserVerifyController],
  providers: [UserVerifyService],
  exports:[UserVerifyService]
})
export class UserVerifyModule {}
