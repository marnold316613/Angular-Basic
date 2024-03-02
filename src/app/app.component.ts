import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PostComponent,CommonModule]
})
export class AppComponent {
  title = 'basics';
  name = 'mike arnold';
  imgURL="http://picsum.photos/id/2/500/500";
  images =[
    "http://picsum.photos/id/1/500/500",
    "http://picsum.photos/id/2/500/500",
    "http://picsum.photos/id/3/500/500"
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.6;
  pizza =  { toppings: ['pepperoni', 'bacon'],
              size: 'large'              
};
  getName() {return this.name};

  changeImage(e: KeyboardEvent) {
    this.imgURL=(e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }

  blueClass = false;
  fontSize=25;
}
