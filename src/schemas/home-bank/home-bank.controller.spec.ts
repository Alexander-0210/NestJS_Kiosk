import { Test, TestingModule } from '@nestjs/testing';
import { HomeBankController } from './home-bank.controller';

describe('HomeBankController', () => {
  let controller: HomeBankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeBankController],
    }).compile();

    controller = module.get<HomeBankController>(HomeBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
