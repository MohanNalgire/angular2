import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   *  ngIg structural directive.
   */
  private ifcondition=true;

  /**
   *  variable declaration for the ngFor structural directive.
   */
  private colors:any[]=[
  {'name':'red'},
  {'name':'gray'},
  {'name':'blue'},
  {'name':'yello'},
  {'name':'orange'},
  {'name':'green'},
  {'name':'black'},
  ];

  /**
  * variable declaration for ngSwitch structural directive.
  */
  private button="On";


}
