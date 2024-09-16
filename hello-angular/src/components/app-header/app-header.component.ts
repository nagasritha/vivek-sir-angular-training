import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    template:"<div class='navbar'><h1 class='header'>Book's Web</h1></div>",
    styles:[
        `.header{
            color:blue;
            font-size:2.5em;
            font-weight:bold;
        }`
    ]
})
export class AppHeaderComponent{

}
