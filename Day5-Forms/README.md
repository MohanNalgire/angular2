#Day5 -Forms

###Angulrar 2 Forms
1   Angular 2.x forms can be written in two ways.  
        a   Template driven forms  
        b   Model driven forms ( Reactive forms )  

2   Today we will see only creating form in ng2 and sending form data to component file.  


### Steps for preparation.
1   copy paste setup-Template.
2   Install jquiery and bootstrap

```
    npm install jquery --save
    npm install  tether --save 
    npm install bootstrap --save
````
or 
```
    npm  install jquery tether bootstrap --save
```
3   write bellow code in app.component.html

```
    <div class="container">
    <form #form="ngForm" (ngSubmit)="submitForm(form.value)" >
    <div class="row" >
    <label>User Name</label>
    <input type="text" class="form-control" name="userid" ngModel
        placeholder="Enter userid"  />
    </div>
    <div class="row">
    <label>User Password</label>
    <input type="password" class="form-control" name="password" ngModel
    placeholder="Enter password"  />
    </div>
    <div class="row" >
    <input type="submit" class="btn btn-success btn-lg form-control" name="Submit" Value="Submit" />
    </div>
    </form>
    </div>
```
4   Now in `app.component.ts` file write one class method as from 
```
     submitForm(form:any):void{
    //console.log("Form data :");
    // console.log(form);
    alert(JSON.stringify(form));

    }
```
which is ngSumit directive related method used in form.






###Questions
1   What are famous types of Forms in ng2?  
2   How to use ngModel in ng2?  