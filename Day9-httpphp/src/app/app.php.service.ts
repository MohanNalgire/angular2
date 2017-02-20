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