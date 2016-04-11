import {Component} from 'angular2/core';

@Component({
    selector: 'App',
    templateUrl : './components/app/app.html'
})
export class App{
    name:string = "Ram..";
    constructor() { }
    
    onEnter(event:any):void{
        console.log('Event is: '+event.target.value);
    }
    
    onClick():void{
        console.log('The value of name is: '+this.name);
    }
}