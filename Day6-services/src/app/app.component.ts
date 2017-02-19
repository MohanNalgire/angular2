import { Component,NgModule } from '@angular/core';
/*
  Service files are imported by (JavaScript import keyword)
  This keyword is used in ES6 for importing any other js file.
  --- JavaScript modules use import statements to access public objects from other modules ---
*/

import {NameService} from'./app.nameservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NameService],
})



export class AppComponent {
  name:string;
  names:Array<string>;  


  constructor(
    private nameservice:NameService,
   ){
  this.name='Mohan';
  this.names=nameservice.getNames();

  };
}
