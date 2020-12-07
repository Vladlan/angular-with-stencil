import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineCustomElements } from '../../loader';
import { ValueAccessor } from './directives/value-accessor';
import {
  MyComponent,
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  MyComponent,
  ValueAccessor
];

@NgModule({
  declarations: [...DECLARATIONS, ValueAccessor],
  exports: [...DECLARATIONS, ValueAccessor],
  entryComponents: DECLARATIONS,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class ComponentLibraryModule {}
