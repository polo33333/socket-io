import { Component  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private url = 'http://localhost:3000';
  private socket;

  constructor(){
    this.socket = io('http://localhost:3000');
  }

}
