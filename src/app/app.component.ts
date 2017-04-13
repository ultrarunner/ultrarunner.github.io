import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <md-toolbar style="background-color: black;">
          <span style="color: white;">
          <a href="\">
          <img 
            src="/assets/borntolearnwild.png" 
            style="margin-right: 10px; width:30px; height: 30px;" 
            alt="Learn Wild | Not every site can become a great source of knowledge; but a great source of knowledge *can* come from any site.">
        </a>
          </span>
          <span class="example-spacer"></span>
          <!--<md-icon class="example-icon" style="color: white;">account_circle</md-icon>
          <md-icon class="example-icon" style="color: white;">delete</md-icon>-->
        </md-toolbar>
        <div class="container" style="margin-top:5px">   
            <dashboard></dashboard>
        </div>        
    `
})

export class AppComponent {
}

