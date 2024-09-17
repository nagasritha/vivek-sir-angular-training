import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAddComponent } from './components/author-add/author-add.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';



@NgModule({
  declarations: [
    AuthorAddComponent,
    AuthorListComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorsModule { }
