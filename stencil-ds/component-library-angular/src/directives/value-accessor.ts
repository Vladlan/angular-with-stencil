import {Directive, ElementRef, HostListener} from '@angular/core';
import {ControlValueAccessor, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';


@Directive({
  selector: 'my-component',
  host: {'(formValueChanged)': 'handleChangeEvent($event.detail.value)'},
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ValueAccessor, multi: true},
    {provide: NG_ASYNC_VALIDATORS, useExisting:ValueAccessor, multi:true}
  ]
})
export class ValueAccessor implements ControlValueAccessor {

  private onChange: (value: any) => void = () => {/**/};
  private onTouched: () => void = () => {/**/};
  protected lastValue: any;

  constructor(protected el: ElementRef) {}

  writeValue(value: any) {
    this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
  }

  handleChangeEvent(value: any) {
    if (value !== this.lastValue) {
      this.lastValue = value;
      this.onChange(value);
    }
  }

  @HostListener('focusout')
  _handleBlurEvent() {
    this.onTouched();
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }
}
