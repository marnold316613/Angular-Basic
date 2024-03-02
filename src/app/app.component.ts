import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PostComponent]
})
export class AppComponent {
  title = 'basics';
  name = 'mike';
  imgURL="http://picsum.photos/id/2/500/500";
  getName() {return this.name};

  changeImage(e: KeyboardEvent) {
    this.imgURL=(e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
