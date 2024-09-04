import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const configService = app.get(ConfigService);

  const USER = configService.get('RABBITMQ_USER');
  const HOST = configService.get('RABBITMQ_HOST');
  const PASS = configService.get('RABBITMQ_PASS');
  const QUEUE = configService.get('RABBITMQ_USERS_QUEUE');
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      noAck: true,
      urls: [`amqp://${USER}:${PASS}@${HOST}`],
      queue: QUEUE,
      queueOptions: {
        durable: true,
      },
    },
  });
}
bootstrap();
