#Day9-http request problem of CROS with cross domain request.

##Steps
###1.   In appache server create `ng2/data.php` page.
```
<?php 
    header("Access-Control-Allow-Origin: *");
    //header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $data=file_get_contents("httpphp.json");
    // file_get_contents return string as output. so use json_decode();
    echo $data;
?>
```

2   In same directory `/ng2` add file`httpphp.json`.
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

3   If you you are familier with `.htaccess` then create this file also in `/ng2` directory.
4   Run xampp server now.

```

```
###2    In angular directory `/app` create file `app/app.php.servie.ts`.

```
import {Injectable} from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

/*
1   Dependancy Injection possible with class.
2 When use @Injectable()
=====> :    When a class has not any other decorater but have a dependancy
*/
@Injectable()
//Above line say that bellow Names class is injectable class where we inject Http module.

export class Phpservice{
    private pagedata:string;
    private phppageurl:string ='http://localhost:82/ng2/data.php';

    // In bellow method we are using the http as object of Http module.
    constructor(private http :Http){
    
    }
    ngOnInit(){       
    }

    getPhpData(){

        /*
         http get method  syntax
         get(url: string, options?: RequestOptionsArgs) : Observable<Response>
        */
        let headers = new Headers(
            { 
                'Content-Type': 'application/json',
             }
            );
        let options = new RequestOptions({ headers: headers });

       return this.http.get(this.phppageurl,options)//http get method 
       .map((response:Response)=>response.json())//mapping of data
       .catch(this.errHandle);
    }

    errHandle(error:Response){
        console.error(error);
        return Observable.throw(error||"Error massage");
    }  
    
}
```

###3    In `/app` directory create file as `/app/app.component.ts` file.

```
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

```

###4    In `/app` directory create file as `/app/app.component.html` file.

```
<pre>
  <h1>
    {{phpdata|json}}
  </h1>
 
</pre>
```
###5 run your application in firfox with development tool.
```
>ng serve 
```