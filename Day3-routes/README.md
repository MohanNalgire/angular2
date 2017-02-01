# Day3 Routing in ng2

###Definition
The Angular Router enables navigation from one view to the next as users perform application tasks.


settings:
1    downoload the `setup-template` code from repository and change as bellow  
2    Settings the base url -For settings base url we use <base href="/" /> in main index.html file.  
3    Importing from router library - import { RouterModule, Routes } from '@angular/router'; file.  


Steps:
1 Create new folder in app directory `first`  
2 Cretae new file in folder `first` as `first.component.ts` file.  
3 Paste this code in `first.compnent.ts` file.  


```
    import {Component} from '@angular/core';

    @Component({
        selector:'my-app',
        templateUrl:'first.component.html'
    })

    export class FirstComponent{}

```

4 Create another file `first.component.html` and paste this code.  

```
    <h1>First component</h1>
```

5 Create new file in app folder with name `app.routing.ts` and paste this code.  

```
    import {NgModule} from "@angular/core";
    import { RouterModule, Routes } from '@angular/router';

    import {FirstComponent} from './first/first.component';
    import {SecondComponent} from './second/second.component';


    const routes:Routes =[
    {
        path:'',
        pathMatch:'full',
        redirectTo:'first'
    },
        {
            path:'first',
            component:FirstComponent
        },
        {
            path:'second',
            component:SecondComponent
        }
    ];

    @NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    })

    export class AppRoutingModule{

    }

    export const routingCompnents = [
        FirstComponent,
        SecondComponent,

        ]
```
6    Import one file as   ` import {AppRoutingModule, routingCompnents} from './app.routing'; `  
7    Now we have to add above file module in import section and component in directives section. Then your file look like this  

```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    //import { FirstComponent } from './first/first.component';
    import {AppRoutingModule, routingCompnents} from './app.routing';

    @NgModule({
    declarations: [
        AppComponent,
        routingCompnents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

```

8    Change `app.component.html` file with this code.  

```
    <h1>Day 3 Routing in ng2</h1>
    <!-- routing links creation -->
    <ul>
    <li><a routerLink="/first">First componet</a></li>
    <li><a routerLink="/second">Second componet</a></li>
    </ul>
    <!-- For displaying routing output -->
    <div >
    <router-outlet></router-outlet>
    </div>
```

By ising these steps you can create multiple components and define multiple routes in ng2?

###Questions:
<ol>
<li>    What is routing concept in ng2?</li>
<li>    Why you use routing?</li>
<li>    Which angular package contain routing?</li>
<li>    What is need to set <base href="/" /> in index.html? </li>
<li>    What we use to display the router page content in html ? </li>
<li>    How we create link to routes in html in ng2?</li>
<li>    
</ol>


