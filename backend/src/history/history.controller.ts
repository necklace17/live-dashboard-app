import { Controller, Get } from '@nestjs/common';
import { DataDto } from '../general/dtos/data.dto';
import { getRandomArbitrary } from '../general/general.functions';

@Controller('history')
export class HistoryController {
  @Get()
  getHistory(): DataDto[] {
    return [...Array(50).keys()].reverse().map((i) => ({
      time: new Date().getTime() - i * 1000,
      value: getRandomArbitrary(),
    }));
  }
}
