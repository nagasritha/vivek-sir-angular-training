import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StarsPipe } from './pipes/stars.pipe';
import { BlurbPipe } from './pipes/blurb.pipe';
import { VisibleDirective } from './directives/visible.directive';
import { ForEachDirective } from './directives/for-each.directive';



@NgModule({
  declarations: [
    NotFoundComponent,
    StarsPipe,
    BlurbPipe,
    VisibleDirective,
    ForEachDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VisibleDirective,
    StarsPipe,
    BlurbPipe,
    ForEachDirective
  ]
})
export class UtilsModule { }
