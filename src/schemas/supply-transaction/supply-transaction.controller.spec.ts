import { Test, TestingModule } from '@nestjs/testing';
import { SupplyTransactionController } from './supply-transaction.controller';

describe('SupplyTransactionController', () => {
  let controller: SupplyTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyTransactionController],
    }).compile();

    controller = module.get<SupplyTransactionController>(SupplyTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
