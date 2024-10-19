import { NestFactory } from '@nestjs/core';
import { KitchenServiceModule } from './kitchen-service.module';

async function bootstrap() {
  const app = await NestFactory.create(KitchenServiceModule);
  await app.listen(3000);
}
bootstrap();
