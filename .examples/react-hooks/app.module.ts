/**
 * React Hooks — App Module
 *
 * Register the RedisModule before using hooks in components.
 */

import { Module } from '@stackra-inc/ts-container';
import { RedisModule } from '@stackra-inc/ts-redis';
import redisConfig from './redis.config';

@Module({
  imports: [RedisModule.forRoot(redisConfig)],
})
export class AppModule {}
