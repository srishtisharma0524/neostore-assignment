import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() btnTitle!: string;
  @Input() btnTitleClasses: string = '';
  @Input() btnType: string = 'button';
  @Input() btnIcon: string = '';
  @Input() btnClasses: any = '';
  @Input() clickHandler: any;
  @Output() customClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(eventData: any) {
    if (this.clickHandler) {
      this.customClick.emit(eventData);
  }

}
}
