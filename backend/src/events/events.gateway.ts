import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { interval, map } from 'rxjs';

@WebSocketGateway({ cors: true })
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('EventsGateway');
  @WebSocketServer()
  server: Server;
  getRandomArbitrary(minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  }
  handleConnection(client: Socket, ...args: any[]): any {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): any {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  afterInit(server: Server) {
    this.logger.log('Initialize Gateway');
    this.emitMessages('umbrella_stocks', 1500, 1, 55);
    this.emitMessages('gotham_city_opera_stocks', 2000);
    this.emitMessages('ingen_stocks', 1000, 70, 99);
    this.emitMessages('cyberdyne_systems', 1250, 30);
  }

  private emitMessages(
    ev: string,
    interval: number = 1000,
    minValue = 1,
    maxValue = 100,
  ) {
    setInterval(
      () => this.server.emit(ev, this.getRandomArbitrary(minValue, maxValue)),
      interval,
    );
  }
}
