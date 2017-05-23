import {Component,Output, EventEmitter} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';
import {detailsComponent} from './details.component';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  //directives: ['detailsComponent']
})
export class MenuComponent {
  title = 'Good!';

}
