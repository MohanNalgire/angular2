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