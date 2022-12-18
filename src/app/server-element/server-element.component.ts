import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // TODO   :   To get data from the parent component, we need to include "@input" directives

  // @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;

  // TODO   :   Examples of Lifecycle

  constructor() {
    console.log('Constructor Called...!!!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called...!!!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called...!!!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called...!!!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called...!!!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called...!!!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called...!!!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called...!!!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called...!!!');
  }
}
