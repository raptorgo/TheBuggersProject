import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
@Injectable()
export class SocketService {

  private socket;

  public initSocket(): void {
    this.socket = io('http://192.168.101.82:3000/company1');
    // this.socket = io('http://192.168.137.254:3000');
    this.onMessage().subscribe((data) => {
      console.log("dato ricevuto " + JSON.stringify(data));
    })
    // this.send({data: "ciaoooo"});
  }

  // public send(message: Object): void {
  //   this.socket.emit('message', message);
  // }

  public onMessage(): Observable<Object> {
    return new Observable<Object>(observer => {
      this.socket.on('message', (data: any) => {
        observer.next(data.message)
      });
    });
  }
}





