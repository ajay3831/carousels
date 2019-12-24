import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {

  /**
   * Input from the parent component
   * @memberof DisplayCardComponent
   */
  @Input() displayDetail;

  constructor() { }

  ngOnInit() {
    
  }
}
