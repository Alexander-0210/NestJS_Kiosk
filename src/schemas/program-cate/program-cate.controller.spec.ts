import { Test, TestingModule } from '@nestjs/testing';
import { ProgramCateController } from './program-cate.controller';

describe('ProgramCateController', () => {
  let controller: ProgramCateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramCateController],
    }).compile();

    controller = module.get<ProgramCateController>(ProgramCateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
