import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
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
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  afterInit(server: Server) {
    this.logger.log('Message Gateway is initialized.');
  }
  handleConnection(client: Socket, ...args: any[]): any {
    client.emit('FromAPI');
    let interval;
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => this.getApiAndEmit(client), 1000);
    this.logger.log(`Client connected: ${client.id}`);
  }
  getApiAndEmit = (socket) => {
    const response = this.getRandomArbitrary(1, 100);
    // Emitting a new message. Will be consumed by the client
    socket.emit('FromAPI', response);
  };
  handleDisconnect(client: Socket): any {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('FromAfPI')
  handleEvent(@ConnectedSocket() client: Socket) {
    this.logger.log(`Emitting message to ${client}..`);
    client.emit('FromAfPI', new Date());
  }
}
