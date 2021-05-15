import { Test, TestingModule } from '@nestjs/testing';
import { FreeSettingController } from './free-setting.controller';

describe('FreeSettingController', () => {
  let controller: FreeSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreeSettingController],
    }).compile();

    controller = module.get<FreeSettingController>(FreeSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
