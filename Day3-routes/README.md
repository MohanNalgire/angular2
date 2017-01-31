# Day3 Routing in ng2

###Definition
The Angular Router enables navigation from one view to the next as users perform application tasks.


settings:
<ol>
<li>    downoload the `setup-template` code from repository and change as bellow </li>
<li>    Settings the base url -For settings base url we use <base href="/" /> in main index.html </li>
<li>    Importing from router library - import { RouterModule, Routes } from '@angular/router';</li>
</ol>

Steps:
<ol>
<li> Create new folder in app directory `first`</li>
<li> Cretae new file in folder `first` as `first.component.ts` </li>
<li> Paste this code in `first.compnent.ts`</li>


```
    import {Component} from '@angular/core';

    @Component({
        selector:'my-app',
        templateUrl:'first.component.html'
    })

    export class FirstComponent{}

```

<li> Create another file `first.component.html` and paste this code </li>

```
    <h1>First component</h1>
```

<li> Create new file in app folder with name `app.routing.ts` and paste this code</li>

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
<li>    Import one file as   ` import {AppRoutingModule, routingCompnents} from './app.routing'; `</li>
<li>    Now we have to add above file module in import section and component in directives section. Then your file look like this</li>

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

<li>    Change `app.component.html` file with this code </li>

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

</ol>
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


