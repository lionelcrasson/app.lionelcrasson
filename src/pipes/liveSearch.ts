import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../models/User';

@Pipe({name: 'liveSearch'})
export class liveSearchPipe implements PipeTransform {
  transform(value: User[], request: string):User[]{
    let filter=request.toLowerCase();


    console.log(filter);
    return filter ? value.filter(
      User=>User.Nom.toLowerCase().indexOf(filter) != -1 ||
      User.Prenom.toLowerCase().indexOf(filter) != -1 
    ) : value;
  }

}
