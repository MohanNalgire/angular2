import { Component } from '@angular/core';

import {Phpservice} from './app.php.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Phpservice]
})
export class AppComponent {
 private phpdata=[];
 private errormsg:string;
  
 constructor(private phpservice:Phpservice){
   this.phpservice.getPhpData().subscribe(
     data=>this.phpdata=data,
     error=>this.errormsg=error,
   );
 }

 

}
