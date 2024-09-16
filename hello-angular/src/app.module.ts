import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppHomeComponent } from "./app-home.component";
import { AppHeaderComponent } from "./app-header.component";
import { AppFooterComponent } from "./app-footer.component";

@NgModule({
    imports:[
        BrowserModule,
    ],
    declarations:[
        AppComponent,
        AppHomeComponent,
        AppHeaderComponent,
        AppFooterComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{

}