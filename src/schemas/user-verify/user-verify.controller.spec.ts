import { Test, TestingModule } from '@nestjs/testing';
import { UserVerifyController } from './user-verify.controller';

describe('UserVerifyController', () => {
  let controller: UserVerifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserVerifyController],
    }).compile();

    controller = module.get<UserVerifyController>(UserVerifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
