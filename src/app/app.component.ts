import { Component, ViewChild } from '@angular/core';
import { DisplayCardComponent } from './display-card/display-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  /**
   * To adjust the carousel position based on the slider input
   * @type {number}
   * @memberof AppComponent
   */
  public leftPosition : number;

  /**
   * Title of the application
   * @type {number}
   * @memberof AppComponent
   */
  public title = 'carousel';

  /**
   * To get the slide control position
   * @memberof AppComponent
   */
  public slideControl = 0;

  /**
   * Detail to be displayed in card format
   * @memberof AppComponent
   */
  public cardDetails = [
    {
      avatar: '',
      name: 'Zoro',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Sanji',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Luffy',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Brook',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Ace',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Robin',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Ussop',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Chopper',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Marco',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Kadio',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Franky',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
    {
      avatar: '',
      name: 'Merry',
      descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem id enim. Ducimus quisquam qui cum quis voluptatum non asperiores? Molestias facere dignissimos sed repellendus. Vitae distinctio consequatur officia, dolorem quia corporis quaerat libero rerum? Mollitia consequatur laudantium delectus modi?'
    },
  ]


  constructor() {
    this.leftPosition = 300;
   }

  /**
   * Function to go to previous slide
   * @memberof AppComponent
   */
  public prev() : void{
    
    if(this.slideControl >0) {
      this.leftPosition += 350;
      this.slideControl = this.slideControl-1
    }
  }
  
  /**
   * Function to go to next slide
   * @memberof AppComponent
   */
  public next() : void {

    if(this.slideControl < this.cardDetails.length-1) {
      this.leftPosition -= 350    
      this.slideControl = this.slideControl+1
    }
  }

}
