import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'+
                '<p>my name is {{name}}</p>'
})
export class App{
    name: string = 'serverrender1';
    constructor(){
        this.name = "Ram..!"
    }
}