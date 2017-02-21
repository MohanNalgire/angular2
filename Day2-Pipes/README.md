# Day 2 Pipes in ng2

Definition : Pipes transform displayed values within a template.


<table>
    <caption>Pipes and filters from Angular1 and Angular2 </caption>
    <tr><th>Pipe/Filter</th><th>Angular1</th><th>Angular2</th></tr>
    <tr><td>currency</td><td>Present</td><td>Present</td></tr>
    <tr><td>date </td><td>Present</td><td>Present</td></tr>
    <tr><td>josn</td><td>Present</td><td>Present</td></tr>
    <tr><td>lowercase</td><td>Present</td><td>Present</td></tr>
    <tr><td>limitTo</td><td>Present</td><td></td></tr>
    <tr><td>uppercase</td><td>Present</td><td>Present</td></tr>
    <tr><td> number</td><td>Present</td> <td>"decimal pipe"</td></tr>
    <tr><td>orderBy</td><td>Present</td> <td></td></tr>
    <tr><td>filter</td><td>Present</td>  <td></td></tr>
    <tr><td>async</td>   <td></td><td>Present</td></tr>
    <tr><td>decimal</td> <td>"number pipe" </td><td>Present</td></tr>
    <tr><td>percent</td> <td></td><td>Present</td></tr>
    <tr><td>I18nPlural</td><td></td><td>Present</td></tr>
    <tr><td>I18nSelect</td><td></td> <td>Present</td></tr>
</table>


#### async pipe
allows us to bind our templates directly to values that arrive asynchronously.  
Syntax:  
```
{{ observable_or_promise_expression | async }}
```

observable_or_promise_expression -> The expression with observable or promise values.  
async                            -> async pipe


### currency pipe
Formats a number as currency using locale rules.
syntax:
```
{{ number_expression | currency:currencyCode:symbolDisplay:digitInfo }}
```
nuber_expression -> Our expression which we want to convert into currency.  
currency         -> currency pipe name.  
currencyCode     -> In whic countries currency you want to conver that code. ex 'USD'.  
symbolDisplay    -> (true or false ) that is you want to display the symbol or not.  
directly         -> how many digit separtion you want to display.  


### date pipe
Syntax:
```
{{ date_expression | date:format }}
```
date_expression -> Your date expression.  
date            -> date pipe name  
format          -> date formats as 
    1   midium
    2   short
    3   midiumDate
    4   shortDate
    5   midiumTime
    6  shortTime


### json pipe
Syntax:
```
{{ expression | json }}
```
expression -> Your expression which you want to covert into json.  
json       -> json pipe name.  


### uppercase pipe
Syntax :
```
{{ expression | uppercase }}
```
expression -> your expression which you want to conver to the uppecase.  
uppecase   -> uppecase pipe name.  


### lowercase pipe
```
{{ expression | lowercase }}
```
expression -> your expression which you want to covert into the lowercase.  
lowercase  -> lowercase pipe name.  






## Questions :
What is pipe concept in Angular2?   
What are types of pipes in Angular2?  
What are new pipes as compare to Angular1 in Angular2?  
What is syntax for each pipe.?  
How to write indian currency symbol in currency pipe?  


## Predefined Pipes(Filters) from some angular2 libs.

### @angular/common
<ol>
    <li>AsyncPipe</li>
    <li>CurrencyPipe </li>
    <li>DatePipe </li>
    <li>DecimalPipe </li>
    <li>I18nPluralPipe </li>
    <li>I18nSelectPipe </li>
    <li>JsonPipe </li>
    <li>LowerCasePipe</li>
    <li>PercentPipe </li>
    <li>SlicePipe </li>
    <li>UpperCasePipe</li>
</ol>