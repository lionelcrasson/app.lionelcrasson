import {Component,Output, EventEmitter} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';
import {detailsComponent} from './details.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

})
export class AppComponent {
  private collection: User[];
  currentUser:User = new User({}); // Important !
  private Coll:Collection;
  title = 'Welcome';
  loginShow:boolean =true;
  public visible:boolean = false;
  private visibleAnimate:boolean = false;
  advertising = false;
  login:string;
  pass:string;

  constructor(Collection: Collection){
    this.Coll = Collection;
    if(!this.loginShow)
      this.loadCollection();
    else
      this.show();
  }
  loadCollection():void{
    this.Coll.getUsers().subscribe(collection=>{
      this.collection = collection;
    });
  }
  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 400);
  }

  public hide(): void {

    if(this.login == 'demo' && this.pass=='123'){
      this.visibleAnimate = false;
      setTimeout(() => this.visible = false, 300);
      this.loadCollection()
    }else{
      this.advertising = true;
    }
  }
  getDetails(event : Event):void{
    event.preventDefault();
    let element = (<HTMLTextAreaElement>event.target);
    this.Coll.getOneUser(element.id).subscribe(currentUser=>{
      //this.currentUser = currentUser;
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
  }
}
