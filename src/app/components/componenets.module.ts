import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluateComponent } from './evaluate-component/evaluate/evaluate.component';



@NgModule({
  declarations: [EvaluateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EvaluateComponent
  ]
})
export class ComponenetsModule { }
