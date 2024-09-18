import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StarsPipe } from './pipes/stars.pipe';
import { BlurbPipe } from './pipes/blurb.pipe';



@NgModule({
  declarations: [
    NotFoundComponent,
    StarsPipe,
    BlurbPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarsPipe,
    BlurbPipe
  ]
})
export class UtilsModule { }
