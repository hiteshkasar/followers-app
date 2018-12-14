import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputFormRoutingModule, inputFormRoutingComponents } from './input-form-routing.module';

@NgModule({
  declarations: [inputFormRoutingComponents],
  imports: [InputFormRoutingModule, FormsModule, CommonModule]
})
export class InputFormModule {}
