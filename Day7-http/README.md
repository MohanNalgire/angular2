#Day7-Http service

##Steps to create http request.
###1   Make http call from service.
To make http call in angular2 we have to create
    1   Service file.
    2   import http module, rxjs module or related operators.
```
    import {Injectable} from '@angular/core';
    import {Http,Response,Headers,RequestOptions} from '@angular/http';
    import {Observable} from 'rxjs/Observable';
    import 'rxjs/add/operator/map';
```    
    3 create a service class for http request
```
export class Names{
}
```
    4 in class add properties and crete constructor as 
```
export class Names{
    name:string;
    names:Array<string>;

    private fileurl:string='http://localhost:4200/api/myjsonobject.json';

    constructor(private http: Http){}
}
```
    5 in above code we use fileurl property for class for defining url for our request page.
    For this in our application we create new folder with `api`  name and add file as `myjsonobject.json`
    add paste this data as 
```
{
"records":[
{"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
{"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
{"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
{"Name":"Around the Horn","City":"London","Country":"UK"},
{"Name":"B's Beverages","City":"London","Country":"UK"},
{"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
{"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"},
{"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"},
{"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"},
{"Name":"Bon app'","City":"Marseille","Country":"France"},
{"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"},
{"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"},
{"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"},
{"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"},
{"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"}
]
} 
```
if you want this data then use w3schools suggesion for angular1 http request where for test we get 
this url as `https://www.w3schools.com/angular/customers.php`if you like.
    
    6. see the class constructor with parameter as http module object.
```
    constructor(http:Http){}
```
    7. Create methods for data handling as 
```
getNames(){
        return this.names=[
            'mohan',
            'ravi',
            'ram'
        ];
    }

    getdataFromFile() {
       return this.http.get(this.fileurl)
                .map(
                    (response:Response) =>response.json()
                    );
    }
```
    8. Whole file `app.names.service.ts` code
```
    import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class Names{
    name:string;
    names:Array<string>;

    private fileurl:string='http://localhost:4200/api/myjsonobject.json';

    constructor(private http: Http){}

    getNames(){
        return this.names=[
            'mohan',
            'ravi',
            'ram'
        ];
    }

    getdataFromFile() {
       return this.http.get(this.fileurl)
                .map(
                    (response:Response) =>response.json()
                    );
    }
}
```

###2   Receive the response from http request as observable and map it.
1   In file `app.component.ts` file import OnInit module from `@angular/core`;
    and also import `app.name.service` file;
```
import { Component,OnInit } from '@angular/core';
import {Names} from './app.names.service';
```
2   Now we want to add the perticualar service for perticular component so 
in @component add providers:[Names] as 
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[     Names,      ]
})
```
###3   Subscribe the observable.
   Now in class handle the response from http request by ngOnInit() methods.
   Assign the response to the local variable (filedata)
```
export class AppComponent {
  names:Array<string>;
  filedata=[];

  constructor(private nameservice:Names){
    this.names=nameservice.getNames();
  }
  ngOnInit(){
      this.nameservice.getdataFromFile()
    .subscribe(
      data=>this.filedata=data,//Arrow function.
      error=>alert(error)
    );
    }
}
```
now wholde code looks like
```
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

  constructor(private nameservice:Names){
    this.names=nameservice.getNames();
  }
  ngOnInit(){
      this.nameservice.getdataFromFile()
    .subscribe(
      data=>this.filedata=data,//Arrow function.
      error=>alert(error)
    );
    }
}
```