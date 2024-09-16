import { Component } from "@angular/core";

@Component({
    selector:'hello-app',
    template: `
        <div class='container'>
            <app-header/>
            <app-home/>
            <app-footer/>
        </div>
    `
})
export class AppComponent{

}
