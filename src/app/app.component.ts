import { Component } from '@angular/core';

import {cardDetails} from './mocks/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * To adjust carousel position;
   * @type {number}
   * @memberof AppComponent
   */
  public leftPosition: number = 0;

  /**
   * To set the transition effect while the slide moves
   * @type {string}
   * @memberof AppComponent
   */
  public transitionEffect: string = 'unset'

  /**
   * Data for the card details
   * @memberof AppComponent
   */
  public cardDetails = cardDetails;

  ngOnInit() {
  //  this.startCarousel();
  }

  /**
   * Function to move to previous slide
   * @returns {void}
   * @memberof AppComponent
   */
  public prev() : void {
    this.transitionEffect = 'left 2s';
    this.leftPosition = this.leftPosition + 100;
  }

  /**
   * Function to move to next slide
   * @returns {void}
   * @memberof AppComponent
   */
  public next(): void {
    this.transitionEffect = 'left 2s';
    this.leftPosition = this.leftPosition - 100;
  }

  /**
   * Function to move the slide to move the slide at specific slide
   * @param {number} index
   * @memberof AppComponent
   */
  public moveToSlideAt(index : number): void { 
    this.transitionEffect = 'unset';
    this.leftPosition = index * -100;
  }

  /**
   * To run the slide show
   * @returns {void}
   * @memberof AppComponent
   */
  public startCarousel(): void {
    setInterval(() => {
      if(this.leftPosition > (-100 * (this.cardDetails.length-1))) {
        this.next();
      } else {
        this.transitionEffect = 'unset';
        this.leftPosition = 0;
      }
    },3000)
  }


}
