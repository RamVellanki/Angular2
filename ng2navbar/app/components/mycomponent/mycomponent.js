System.register(['angular2/core', '../button/button', '../card/card', '../navbar/navbar'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_1, card_1, navbar_1;
    var MyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (navbar_1_1) {
                navbar_1 = navbar_1_1;
            }],
        execute: function() {
            MyComponent = (function () {
                function MyComponent() {
                }
                MyComponent = __decorate([
                    core_1.Component({
                        selector: 'mycomponent',
                        styleUrls: ['app/components/mycomponent/mycomponent.css'],
                        templateUrl: 'app/components/mycomponent/mycomponent.html',
                        directives: [button_1.MdButton, button_1.MdAnchor, card_1.MD_CARD_DIRECTIVES, navbar_1.MdNavbar]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponent);
                return MyComponent;
            }());
            exports_1("MyComponent", MyComponent);
        }
    }
});
//# sourceMappingURL=mycomponent.js.map