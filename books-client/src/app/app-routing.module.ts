import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../books/components/book-list/book-list.component';
import { AuthorListComponent } from '../authors/components/author-list/author-list.component';
import { NotFoundComponent } from '../utils/components/not-found/not-found.component';

const routes: Routes = [

  {path:'', pathMatch:'full', redirectTo:'/books'},
  {path:'books', loadChildren:()=>import('../books/books.module').then(m=>m.BooksModule)},
  {path:'authors', loadChildren:()=>import('../authors/authors.module').then(m=>m.AuthorsModule)},
  {path:'', loadChildren:()=>import('../users/users.module').then(m=>m.UsersModule)},

  //not found route. Not importing from utils.rout
  {path:'**', component: NotFoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
