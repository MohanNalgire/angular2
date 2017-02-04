import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
 
 submitForm(form:any):void{
  //console.log("Form data :");
 // console.log(form);
 alert(JSON.stringify(form));

 }


}
