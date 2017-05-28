import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {Collection} from '../services/Collection';
import {Http} from '@angular/http';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { detailsComponent } from './details.component';
import { MenuComponent } from './menu.component';
import {liveSearchPipe} from '../pipes/liveSearch';

@NgModule({
  declarations: [
    AppComponent,
    detailsComponent,
    MenuComponent,
    FormComponent,
    liveSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Collection, CookieService,liveSearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
