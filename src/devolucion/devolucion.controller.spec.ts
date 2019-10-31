import { Test, TestingModule } from '@nestjs/testing';
import { DevolucionController } from './devolucion.controller';

describe('Devolucion Controller', () => {
  let controller: DevolucionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevolucionController],
    }).compile();

    controller = module.get<DevolucionController>(DevolucionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
