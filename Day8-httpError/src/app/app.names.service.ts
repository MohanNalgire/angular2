import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
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

export class Names{
    name:string;
    names:Array<string>;

    private fileurl:string='http://localhost:4200/api/myjsonobjects.json';
    
    // class has dependancy as Http object.
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
                .map((response:Response) =>response.json())
                .catch(this.errHandler);
    }
    errHandler(error:Response){
        console.error(error);
        return Observable.throw(error||"Error massage");
    }
}