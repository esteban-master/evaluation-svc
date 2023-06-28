import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './config/database/prisma.service';
import { PubSubService } from './pubsub/pubsub.service';
import { Message, Subscription } from '@google-cloud/pubsub';

@Injectable()
export class AppService implements OnModuleInit, OnModuleDestroy {
  private subTopic: Subscription;
  constructor(
    private readonly prismaService: PrismaService,
    private readonly pubSubService: PubSubService,
  ) {}

  onModuleInit() {
    this.subTopic = this.pubSubService
      .getSubscription()
      .on('message', async (message: Message) => {
        console.log('MESAJE DATA: ', JSON.parse(message.data.toString()));
        try {
          const { id, name } = JSON.parse(message.data.toString());
          await this.prismaService.student.create({
            data: { id, name },
          });
          message.ack();
        } catch (error) {
          console.log(error.message);
        }
      })
      .on('error', (error) => {
        console.error(error);
      });
  }
  async onModuleDestroy() {
    console.log('Destroy');
    await this.subTopic.close();
  }
}
