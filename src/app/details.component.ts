import {Component,Input, Injector,Output, EventEmitter} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';
import {FormComponent} from './form.component';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})
export class detailsComponent{
  @Input() currentU :User;
  @Output() updatedUser = new EventEmitter<User>();
  public dynamicLoader = "1";

  switchView(){
      this.dynamicLoader = '2';
  }
  saveView(){
      this.dynamicLoader = '1';
      this.updatedUser.emit(this.currentU);
  }

}
