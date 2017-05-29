import {Component,Output, EventEmitter} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent {
  caretMenu:string[];
  menuVisible:string[];
  constructor(){
    this.caretMenu=['fa','fa-caret-right'];
    this.menuVisible=['isNotVisible'];
  }
  openMenu(){
    if(this.menuVisible[0] == 'isNotVisible'){
      this.menuVisible = ['isVisible'];
      this.caretMenu = ['fa','fa-caret-down'];

    }else{
        this.menuVisible = ['isNotVisible'];
        this.caretMenu = ['fa','fa-caret-right'];
      }

  }
}
