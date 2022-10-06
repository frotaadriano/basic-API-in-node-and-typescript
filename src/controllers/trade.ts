import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('trade')
export class TradeController {
  @Get('')
  public getTrade(_: Request, res: Response): void {
    res.send([
      {
        u: 810119359,
        s: 'BTCBRL',
        b: '101935.00000000',
        B: '0.02600000',
        a: '101977.00000000',
        A: '0.02576000',
      },
    ]);
  }
}