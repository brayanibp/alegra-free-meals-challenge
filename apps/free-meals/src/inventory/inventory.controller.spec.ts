import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  INVENTORY_PACKAGE_NAME,
  INVENTORY_SERVICE_NAME,
} from '@app/proto-definitions/generated/inventory';

describe('InventoryController', () => {
  let controller: InventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: INVENTORY_SERVICE_NAME,
            transport: Transport.GRPC,
            options: {
              package: INVENTORY_PACKAGE_NAME,
              protoPath: 'libs/proto-definitions/src/inventory.proto',
              url: 'localhost:5000',
            },
          },
        ]),
      ],
      controllers: [InventoryController],
      providers: [InventoryService],
    }).compile();

    controller = module.get<InventoryController>(InventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
