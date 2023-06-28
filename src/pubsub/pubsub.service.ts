import { PubSub, Subscription } from '@google-cloud/pubsub';
import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import commonEnv from 'src/config/commonEnv.config';

@Injectable()
export class PubSubService implements OnModuleDestroy {
  protected readonly client: PubSub;
  protected readonly subscription: Subscription;

  constructor(
    @Inject(commonEnv.KEY) commonEnvConfig: ConfigType<typeof commonEnv>,
  ) {
    this.client = new PubSub({
      projectId: commonEnvConfig.PROJECT_ID,
    });

    this.subscription = this.client
      .topic(commonEnvConfig.PUB_SUB_TOPIC_ID)
      .subscription(commonEnvConfig.PUB_SUB_SUBSCRIPTION_ID);
  }

  getSubscription() {
    return this.subscription;
  }

  async onModuleDestroy() {
    console.log('Destroy pubSub');
    await this.client.close();
  }
}
