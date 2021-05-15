import { Test, TestingModule } from '@nestjs/testing';
import { WashFoldController } from './wash-fold.controller';

describe('WashFoldController', () => {
  let controller: WashFoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WashFoldController],
    }).compile();

    controller = module.get<WashFoldController>(WashFoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
