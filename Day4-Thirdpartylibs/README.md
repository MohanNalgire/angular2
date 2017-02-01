# Day4 Third Party Library Installtion in ng2


1 Copy `setup-template` and paste it and rename for Day4  
2 To Install third party library use the bellow command  
3 Installation of bootstrap  


```
github2\angular2\Day4-Thirdpartylibs>npm install ng2-bootstrap --save
```


4 Installation of jQuery  


```
    github2\angular2\Day4-Thirdpartylibs>npm install jquery --save
```

5 After installtion in file `angular-cli.json` angular-cli application settings file.  
6 Change these two keys as script, style.  

```
  "scripts": [
          "../node_modules/jquery/dist/jquery.js",
          "../node_modules/tether/dist/js/tether.js",
          "../node_modules/bootstrap/dist/js/bootstrap.js"
        ],
      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.css"
      ],   
```
Note::  
1 Follow dependancy rules of js.  
2 Don't do any mistake in defining file path.  
3 define libraries fist and mvc later.  


## Now we will see how to implement routes with bootstrap as a header page design
<ol>
<li>    We will create Home, AboutUs, Services, Contacts, Login, Logout pages <li>
<li>    We will design header with above page nevigation.</li>
</ol>

### Setps 
<ol>
    <li>    Create new folder in app directory `home` </li>
    <li>    Create new file in `home` directory as `home.component.ts` </li>
    <li>    Copy paste code from `app.component.ts` file to `home.component.ts` file </li>
    <li>    Create new file in `home` directory as `home.component.html` file</li>

```
    <h1>    Home component file </li>
```

   <li>     Create new file in `home` directory as `home.component.css` file </li>
   <li>     In above file write home component related style rules </li>
   <li>     Create new file in `app` folder with name `app.routings.ts` file </li>
   <li>     Add the bellow code in the file `app.routings.ts` </li>

```
    import {NgModule} from '@angular/core';
    import {RouterModule, Routes} from '@angular/router';

    import {HomeComponent} from './home/home.component';
    import {AboutComponent} from './about/about.component';

    const routes:Routes=[
        {
            path:'',
            pathMatch:'full',
            redirectTo:'home'
        },
        {
            path:'home',
            component:HomeComponent
        },
        {
            path:'about',
            component:AboutComponent
        }
    ]
    @NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    })

    export class AppRoutingsModule{}
    export const routingComponents =[
        HomeComponent,
        AboutComponent
    ]
```

<li>    Now your `app` folder contain file `app.component.ts` change like this bellow </li>

```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    //import { HomeComponent } from './home/home.component';
    //import { AboutComponent } from './about/about.component';

    import { AppRoutingsModule,routingComponents }  from './app.routings';

    @NgModule({
    declarations: [
        AppComponent,
        routingComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

```
Note :: in this file when we create the component by using the angular-cli command `ng generate component <componentName`
then the 4 files are created as with folder name as componentName .  
And in `app.component.ts` file that files component are imorted because this is main component file.  
For more details on component and component dependancy read on anglar api document.  

<li>     Follow above steps to create multiple component </li>

### Questions:
<ol>
<li>    How to use the bootstrap ando jquery like third party file in ng2</li>
<li>    How to create header file in ng2 </li>
</ol>

</ol>