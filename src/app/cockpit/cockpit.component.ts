import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // TODO   :   To send data from the Child component, we need to include "@output" directives
  @Output() serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    //TODO   :   Child to Parent Data Binding, we emit methods here
    // this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}
