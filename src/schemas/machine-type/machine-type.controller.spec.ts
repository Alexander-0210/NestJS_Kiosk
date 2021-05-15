import { Test, TestingModule } from '@nestjs/testing';
import { MachineTypeController } from './machine-type.controller';

describe('MachineTypeController', () => {
  let controller: MachineTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineTypeController],
    }).compile();

    controller = module.get<MachineTypeController>(MachineTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
