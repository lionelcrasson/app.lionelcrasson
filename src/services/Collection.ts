import {Http} from '@angular/http';
import {User} from '../models/User';
import {Access} from '../models/Access';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//GOOD PRACTICES
//http://file.allitebooks.com/20150828/REST%20API%20Design%20Rulebook.pdf

@Injectable()
export class Collection{

public collection:User[];
public currentU:User;
public access:Access;
private Http: Http;
private headers = new Headers({'Content-Type': 'application/json'});

  constructor(Http:Http){
    this.Http = Http;
  }
  getUsers():Observable<User[]>{
    return this.Http.get('http://www.api.lionelcrasson.be/users')
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

    UpdateUser(U:User):Observable<User>{
      var body = U;
      return this.Http.put('http://www.api.lionelcrasson.be/user/'+U.idUsers,body,{
        headers:this.headers
      }).map(response=>{
              console.log(response);
              return this.currentU;
      })
  }
  /*getAccess(login,pass):Observable<Access>{
    return this.Http.get('http://www.api.lionelcrasson.be/access/')
                    .map(response=>{
                      this.access = response.json();
                      console.log(this.access);
                      return this.access;
                    })
  }
  AddUser(U:User):Observable<User>{
    var body = JSON.stringify(U);
    return this.Http.put('http://www.api.lionelcrasson.be/user/',body,{
      headers:this.headers
    }).map(response=>{

    })
}*/
}
