import { Module } from '@nestjs/common';

import { EventsModule } from './events/events.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [EventsModule, HistoryModule],
})
export class AppModule {}
