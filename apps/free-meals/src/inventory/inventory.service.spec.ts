import { Test, TestingModule } from '@nestjs/testing';
import { InventoryService } from './inventory.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  INVENTORY_PACKAGE_NAME,
  INVENTORY_SERVICE_NAME,
} from '@app/proto-definitions/generated/inventory';

describe('InventoryService', () => {
  let service: InventoryService;

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
      providers: [InventoryService],
    }).compile();

    service = module.get<InventoryService>(InventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
