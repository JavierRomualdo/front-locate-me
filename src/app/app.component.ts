import { Component } from '@angular/core';
import { WebsocketService } from './servicios/websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-locate-me';

  constructor(
    private wsService: WebsocketService,
  ) {}
}
