import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../models/User';

@Pipe({name: 'liveSearchTest'})
export class liveSearchPipe implements PipeTransform {
  transform(value: User[], request: string){
    console.log(value);
      value = value.filter((el) =>
        el.Nom.toLowerCase().indexOf(request.toLowerCase()) > -1
    );
    console.log(value);
  }

}
