import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', function() {
      console.log('Conectado al servidor');
    });

    this.socket.on('disconnect', function() {
      console.log('Desconectado al servidor');
    });
  }

  emit(evento: string, payload?: any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }
}
