import { SetupSever } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupSever();
  server.init();

  globalThis.testRequest = supertest(server.getApp());
});
