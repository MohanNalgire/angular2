#Day6-services

## Definition 
`Service is a broad category encompassing any value, function, or feature that your application needs.`

1.Almost anything can be a service. 
2.A service is typically a class with a narrow, well-defined purpose. 
3.It should do something specific and do it well.
===>Components are big consumers of services.

##Steps for creating services

1.  Create file in `src/app/` directory with name as `app.nameservice.service.ts` and 
save it with bellow code.
```
  export class NameService{
      names:Array<string>;
      constructor(){
          this.names=['Ram','Ravi','Rajiv'];
      }
      getNames(){
          return this.names;
      }
  }

```

2 In `app.lcomponent.ts` file import `app.NameService.service.ts` file.
import  - This keyword is used to import javascript module file.
imports - this is used to import angular modules.

change the @componet with adding value for the provider as `providers:['NameService']`
then our file looks like this bellow code.
```
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
```

3 now we want to pass this `name` and `names` class properties to view page
ie. `app.Component.html` so add `{{name}} and <br> {{ names}}` in file.

```
My name is:{{name}}<br>
My friends are:{{names}}
```





### Questions
<ol>
  <li>What is service in ng2?</li>
  <span>Service is a broad category encompassing any value, function, or feature that your application needs.</span>
  
  <li>What are examples of service.?</li>
  Examples include:
<div>
1.logging service <br>
2.data service<br>
3.message bus<br>
4.tax calculator<br>
5.application configuration<br>
</div>
  <li>If componets are big consumers of services?</li>Yes
</ol>