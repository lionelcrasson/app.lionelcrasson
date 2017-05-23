import {Component,Input} from '@angular/core';
import {Collection} from '../services/Collection';
import {User} from '../models/User';


@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.css']
})
export class detailsComponent{
  @Input() currentU :User;

}
