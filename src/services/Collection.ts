import {Http} from '@angular/http';
import {User} from '../models/User';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Collection{

public collection:User[];
public currentU:User;
private Http: Http;

  constructor(Http:Http){
    this.Http = Http;
  }
  getUsers():Observable<User[]>{
    return this.Http.get('http://www.api.lionelcrasson.be/user/all')
                    .map(response=>{
                      this.collection = response.json();
                      console.log(this.collection);
                      return this.collection;
                    })
  }

  getOneUser(id):Observable<User>{
    return this.Http.get('http://www.api.lionelcrasson.be/user/'+id)
                    .map(response=>{
                      this.currentU = response.json();
                      console.log(this.currentU);
                      return this.currentU;
                    })
  }

}