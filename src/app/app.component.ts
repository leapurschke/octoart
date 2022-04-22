import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postsTexts = [
    'Love',
    'Peace',
    'Happiness'
  ];
 
  postsImg = [
    'assets/img/flowers/bild1.jpg',
    'assets/img/flowers/bild2.jpg',
    'assets/img/flowers/bild3.jpg'
  ];
  buttonClicked() {
    alert('Hello');
  }
}
