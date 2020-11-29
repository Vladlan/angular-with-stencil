import { NgModule } from '@angular/core';
import { defineCustomElements } from '../../loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';
import {
  MyComponent,
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  MyComponent,

  // Value Accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
