# Day1 Angular 2 Directives 
###(For code ref::Day1-Directives/README.html)

Their are three kind of directives in angular 2
Definiations:
Directives that changes the structure of the DOM.

Directives Points:
1   Directives are components without a view.
2   Directives are components without template.

Component points:
1   Components are directives with view.

Note:: Everything you can do with a directive you can also do with a component. But not everything you can do with a component you can do with a directive.


Types of Directives in ng2
1   Components              
    Directives with a template.
2   Structural Ddirectives  
    Change the DOM layout by adding and  removing DOM elements.
    Strutural directive change the change the structure of the view.
    Structural directives in ng2 example.
        2.1 NgFor (This directive is the successor of Angular 1s ng-repeat directive.)
        2.2 NgIf
        2.3 ngSwitch
    

3   Attribute Directives    
    Change the appearance or behaviour of element.


# *ngIf Example explanation:
In app.component.ts file add 
 in class AppComponent add this 
```
  /*
   *  ngIg structural directive.
   */
  private ifcondition=true;
```

in app.compnent.html
ngIf syntax:
```
<p *ngIf="expression">If true value displayed.</p>
```

Note::  Here * indicate that is is condtional expression.

# *ngFor Example explation.
In app.component.ts file add 
 in class AppComponent add this

```
  /*  
   *  variable declaration for the ngFor structural directive.  
   */  
  private colors:any[]=[
  {'name':'red'},
  {'name':'gray'},
  {'name':'blue'},
  {'name':'yello'},
  {'name':'orange'},
  {'name':'green'}, 
  {'name':'black'},
  ];  
```

In app.component.html
```
<ol>
    <li *ngFor="let color of colors" >
        {{color.name}}
    </li>
</ol>
```

# *ngSwitch Example explation.
In app.component.ts file add
in class Appcompoent class

```
    /*
    * variable declaration for ngSwitch structural directive.
    */
    private button="On";
```

```
    <ul [ngSwitch]="button">
        <li *ngSwitchCase="'On'"  >Button is On.</li>
        <li *ngSwitchCase="'Off'"  >Button is Off</li>
    </ul>
```


# Questions:

What is Directive?
What are types of directive?
What is diffrence in component and directive.?

