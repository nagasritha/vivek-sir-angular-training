import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppHomeComponent } from "./components/app-home/app-home.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { RangeComponent } from './utils/components/range.component';
import { FormsModule } from "@angular/forms";
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        AppHomeComponent,
        AppHeaderComponent,
        AppFooterComponent,
        BookListComponent,
        RangeComponent,
        UserLoginComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{

}