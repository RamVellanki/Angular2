import {Component} from 'angular2/core';
import { MdButton, MdAnchor } from '../button/button';
import { MD_CARD_DIRECTIVES } from '../card/card';
import { MdNavbar } from '../navbar/navbar';


@Component({
    selector: 'mycomponent',
    styleUrls: ['app/components/mycomponent/mycomponent.css'],
    templateUrl:'app/components/mycomponent/mycomponent.html',
    directives: [MdButton, MdAnchor, MD_CARD_DIRECTIVES, MdNavbar] 
})

export class MyComponent{
}