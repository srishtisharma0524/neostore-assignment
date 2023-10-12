import { Component, EventEmitter, forwardRef, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true
  }]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

  @Input() dataCallback: any;

  /**
   * Data for dropdown options
   * Could be string[], obj[] etc
   * Either dataObservable or data should be provided 
   */
  @Input() data: any[] = [];

  /**
   * DataObservable for dropdown options, 
   * Either dataObseverbale or data should be provided 
   */
  @Input() dataObservable!: Observable<any>;
  /**
   * Set this flag to true if dataCallback returning observable
   */
  @Input() isAsync: boolean = false;
  /**
   * Placeholder for drodown
   * Note: for now to make placeholder visible set default value of FormControl = null
   */
  @Input() placeholder: string = 'Select Item from Dropdown';
  @Input() customClass: any;
  @Input() appendTo: any = '.common-content';
  // @Input() customPosition: any = "bottom";

   @Input() asdf: any ;


  /**
   * Text to show if searched item is not found
   */
  @Input() noDataText: string = 'No Items to Show';

  /**
   * If obj[] is provided, Object property to use for label. Default 'name'
   */
  @Input() bindLabel: string = 'name';
  /**
   * If obj[] is provided, Object property to use for selected model. By default binds to whole object.
   */
  @Input() bindValue: string = 'id';
  /**
   * To allow multiselect, default singleselect
   */
  @Input() multiSelect: boolean = false;
  /**
   * Set autocomplete readonly. Mostly used with reactive forms.
   */
  @Input() readonly: boolean = false;
  /**
   * Enable virtual scroll for better performance when rendering a lot of data
   */
  @Input() virtualScroll: boolean = false;

  /**
   * To enable/disable form element
   */
  @Input() disabled: boolean = false;

  /**
   * Input biniding of data should be provided if user is using this event
   */
    /**
   * Allow/Disallow to clear selected value.
   */
  @Input() clearable: boolean = false;
  
  @Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Output emitter for catching change in parent component.
   */
  @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() value!: any;
  
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    (!this.data || this.data.length == 0) && this.getData();
  }

  // ControlValueAccessors Starts

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onChangeHandler(value: any) {
    this.onChange(value);
    this.onTouched();
  }
  // ControlValueAccessors Ends

  getData() {
    if (this.dataCallback) {
      if (this.isAsync === true) {
        this.dataObservable = this.dataCallback();
      } else {
        this.data = this.dataCallback();
      }
    }
  }
}
