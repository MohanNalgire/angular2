export class NameService{
    names:Array<string>;
    constructor(){
        this.names=['Ram','Ravi','Rajiv'];
    }
    getNames(){
        return this.names;
    }
}