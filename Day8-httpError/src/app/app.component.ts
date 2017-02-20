import { Component,OnInit } from '@angular/core';
import {Names} from './app.names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[     Names,      ]
})
export class AppComponent {
  names:Array<string>;
  filedata=[];
  errormsg:string;
  
  constructor(private nameservice:Names){
    this.names=nameservice.getNames();
  }

  ngOnInit(){
      this.nameservice.getdataFromFile()
    .subscribe(
      data=>this.filedata=data,//Arrow function.
      error=>this.errormsg=error,//
    );
    }
}
