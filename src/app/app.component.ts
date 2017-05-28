import {Component,Output,Input, EventEmitter,OnInit} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';
import {Access} from '../models/Access';
import {detailsComponent} from './details.component';
import {MenuComponent} from './menu.component';
//obsolete => https://github.com/salemdar/ngx-cookie#get-started
import { CookieService } from 'ng2-cookies';
import * as CryptoJS from 'crypto-js';
import {liveSearchPipe} from '../pipes/liveSearch';
@Component({
  selector: 'app-root',
  providers: [ CookieService ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  private secretKey:string = "FAD24C6C42F68F37AB584D29C57A6";
  private encryptPass:string;
  private Coll:Collection;
  public collection: User[]=[];
  @Input() currentUser:User = new User({}); // Important !
  private tokenAuth:Access = new Access({});
  private modalVisible:boolean = false;
  private modalVisibleAnimate:boolean = false;
  private advertisingLogin = false;
  private login:string;
  private pass:string;
  private title = 'Welcome';
  private hasCookieToken:boolean=false;
  public request:string='v';
  public testValue:number = 20;
  public search:string="";
  public displayContent="0";

  constructor(Collection: Collection, public cookieService: CookieService){
    this.Coll = Collection;
  }
   ngOnInit(){
     if(this.hasCookieToken)
       this.loadCollection();

     else
       this.showModal();
   }
   isUpDate(U:User){
        var objFound_bool = false;
        for (var i = 0; i < this.collection.length && objFound_bool == false; i++) {
          if(U.idUsers === this.collection[i].idUsers){
            objFound_bool = true;
            this.collection[i] = U ;
          }
        }
        this.Coll.UpdateUser(U).subscribe(
          data => console.log(data)
        );
   }

  addCookie(cName: string, cValue: string) {
    console.log('Adding: ', cName, cValue);
    this.cookieService.set(cName, cValue);
  }

  loadCollection():void{
    this.Coll.getUsers().subscribe(collection=>{
      this.collection =collection;
    });
    this.displayContent="1";
  }
  public showModal(): void {
    this.modalVisible = true;
    setTimeout(() => this.modalVisibleAnimate = true, 400);
  }

  public hideModal(): void {
    /* A implémenter côté serveur
    this.encryptPass=CryptoJS.AES.encrypt(this.pass,this.secretKey);
    this.Coll.getAccess(this.login,this.encryptPass.toString()).subscribe(tokenAuth=>{
        if(tokenAuth[0].status){
          this.addCookie("authToken",tokenAuth[0].token);
          this.modalVisibleAnimate = false;
          setTimeout(() => this.modalVisible = false, 300);
          this.loadCollection();
        }else{
          this.advertisingLogin = true;
      }

    });
    */

    if(this.login == 'demo' && this.pass=='123'){

      this.modalVisibleAnimate = false;
      setTimeout(() => this.modalVisible = false, 300);
      this.loadCollection()
    }else{
      this.advertisingLogin = true;
    }
  }
  getDetails(event : Event):void{
    event.preventDefault();
    let element = (<HTMLTextAreaElement>event.target);
    // VERSION LOCALE
    var objFound_bool = false;
    for (var i = 0; i < this.collection.length && objFound_bool == false; i++) {
      if(element.id === this.collection[i].idUsers.toString()){
        objFound_bool = true;
        this.currentUser = this.collection[i] ;
      }
    }
/* VERSION LIVE
    this.Coll.getOneUser(element.id).subscribe(currentUser=>{
      this.currentUser = new User({
        "Titre":currentUser[0].Titre,
        "Nom":currentUser[0].Nom,
        "Prenom":currentUser[0].Prenom,
        "Rue_num1":currentUser[0].Rue_num1,
        "Pays":currentUser[0].Pays,
        "Nom_ville":currentUser[0].Nom_ville,
        "idUsers":currentUser[0].idUsers,
        "code_postal":currentUser[0].code_postal
      });
    });
    */
  }
}
