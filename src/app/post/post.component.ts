import { Component, Input, EventEmitter, Output,OnInit,OnChanges,DoCheck, SimpleChanges,
 AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
    AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
 @Input('img') postImg="";
 @Output() imgSelected = new EventEmitter<string>();

 constructor() {
  console.log('constructor() called', this.postImg);
 }
 ngOnInit() {
  console.log('ngOnInit() called',this.postImg);
 }
 ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges() called',this.postImg);
 }
 ngDoCheck(): void {
  console.log('DoCheck() called',this.postImg);
 }
 ngAfterContentInit(): void {
  console.log('gAfterContentInit() called',this.postImg);
 }
 ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked() called',this.postImg);
 }
 ngAfterViewInit(): void {
  console.log('ngAfterViewInit() called',this.postImg);
 }
 ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked() called',this.postImg);
 }
 ngOnDestroy(): void {
  console.log('ngOnDestroy() called',this.postImg);
 }

}
