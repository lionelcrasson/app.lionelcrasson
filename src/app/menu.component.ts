import {Component,Output, EventEmitter} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  title = 'Good!';

}
