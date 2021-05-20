import { Test, TestingModule } from '@nestjs/testing';
import { PrivacypolicyController } from './privacypolicy.controller';

describe('PrivacypolicyController', () => {
  let controller: PrivacypolicyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivacypolicyController],
    }).compile();

    controller = module.get<PrivacypolicyController>(PrivacypolicyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
