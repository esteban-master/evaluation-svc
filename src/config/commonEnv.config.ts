import { registerAs } from '@nestjs/config';

export default registerAs('commonEnv', () => ({
  PROJECT_ID: process.env.PROJECT_ID,
  PUB_SUB_TOPIC_ID: process.env.PUB_SUB_TOPIC_ID,
  PUB_SUB_SUBSCRIPTION_ID: process.env.PUB_SUB_SUBSCRIPTION_ID,
}));
