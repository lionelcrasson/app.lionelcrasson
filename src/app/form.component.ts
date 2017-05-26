import {Component,Input,Output, EventEmitter} from '@angular/core';
import {User} from '../models/User';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  //styleUrls: ['form.component.css'],
})
export class FormComponent {
  @Input() UserForm :User;
}
