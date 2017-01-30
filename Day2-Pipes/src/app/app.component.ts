import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname="RAVI";
  mname="Kishan";
  lname="Patel";

  fullname = this.fname +" "+this.mname+ " "+this.lname;

  currency=10000;
  pi: number = 3.141592;
  today =new Date();
  jsonvar= [
    {
      'fname':this.fname,
      'mname':this.mname,
      'lname':this.lname

    }

  ];
}
