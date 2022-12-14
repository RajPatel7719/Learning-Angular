import { Component } from '@angular/core';

@Component({

  //  TODO  :   To use the TAG selector
  selector: 'app-server',

  //  TODO  :   To use the ATTRIBUTE selector
  // selector: '[app-server]',

  //  TODO  :   To use the CLASS selector
  // selector: '.app-server',

  //  TODO  :   To use EXTERNAL HTML file
  templateUrl: './server.component.html',

  //  TODO  :   To use INLINE HTML file
  // template: `
  // <h3> I'm from inline template...!</h3>
  // `,

  //  TODO  :   To use external CSS file
  // styleUrls: ['./server.component.css'],

  //  TODO  :   To use INLINE CSS file
  styles: [`
    h1{
      color: blue;
    }
  `]
})

export class ServerComponent {

}
