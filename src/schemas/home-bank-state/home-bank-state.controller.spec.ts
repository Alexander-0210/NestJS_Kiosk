import { Test, TestingModule } from '@nestjs/testing';
import { HomeBankStateController } from './home-bank-state.controller';

describe('HomeBankStateController', () => {
  let controller: HomeBankStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeBankStateController],
    }).compile();

    controller = module.get<HomeBankStateController>(HomeBankStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
