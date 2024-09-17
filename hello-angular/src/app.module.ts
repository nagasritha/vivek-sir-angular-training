import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppHomeComponent } from "./components/app-home/app-home.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { RangeComponent } from './utils/components/range.component';

@NgModule({
    imports:[
        BrowserModule,
    ],
    declarations:[
        AppComponent,
        AppHomeComponent,
        AppHeaderComponent,
        AppFooterComponent,
        BookListComponent,
        RangeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{

}