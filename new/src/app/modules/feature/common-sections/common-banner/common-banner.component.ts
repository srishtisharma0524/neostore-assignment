import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.scss']
})
export class CommonBannerComponent implements OnInit {
  @Input() breadcrumbs: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  

}
