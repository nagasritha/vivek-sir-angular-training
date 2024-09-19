import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StarsPipe } from './pipes/stars.pipe';
import { BlurbPipe } from './pipes/blurb.pipe';
import { VisibleDirective } from './directives/visible.directive';
import { ForEachDirective } from './directives/for-each.directive';
import { FieldSetComponent } from './components/field-set/field-set.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    StarsPipe,
    BlurbPipe,
    VisibleDirective,
    ForEachDirective,
    FieldSetComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotFoundComponent,
    VisibleDirective,
    StarsPipe,
    BlurbPipe,
    ForEachDirective,
    FieldSetComponent
  ]
})
export class UtilsModule { }
