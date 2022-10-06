//iniciando a configuração inical do servidor
import './util/module-alias';
import { Controller, Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { TradeController } from './controllers/trade';
import { Application } from 'express';

export class SetupSever extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  //init do controller
  private setupControllers(): void {
    const tradeController = new TradeController();
    this.addControllers([tradeController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
