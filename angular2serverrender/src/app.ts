import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
    <div>
        <h1> Hello, Ram</h1>
    </div>
    `
})
export class App{
    name: string = 'serverrender1';
    constructor(){
        
    }
}