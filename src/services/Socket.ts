import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

//GOOD PRACTICES
//http://file.allitebooks.com/20150828/REST%20API%20Design%20Rulebook.pdf

@Injectable()
export class Socket{
  public connection:any;

  constructor(){
  this.connection = io.connect("http://www.app.lionelcrasson.be:3000");
  }
  socket(){
    return this.connection;
  }
}
