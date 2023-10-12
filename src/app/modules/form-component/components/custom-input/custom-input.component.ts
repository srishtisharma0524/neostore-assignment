import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }]
})
export class CustomInputComponent implements OnInit, OnChanges {
  @Input() placeholders: string = '';

  /**
   * Value to be shown on input field
   */
  @Input() value!: string | number;

  /**
   * Emit changed input value
   */
  @Output() valueChange = new EventEmitter<string | number>();
  @Input() type: string = 'text';
  @Input() class: string = '';


  /**
   * Should restrict to enter input values more than maxLength
   */
  @Input() maxLength: number = 999;

  //modifiedValue!: any;
  onChange!: any;
  onTouched!: any;

  constructor() { }

  ngOnInit(): void {   
  }

  ngOnChanges() {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: any) {
    // In case of type number need to typecast it
    event = this.type === 'number' ? +event : event;
    this.onChange?.(event);
    this.onTouched?.();
  }

  
}

