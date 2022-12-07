import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  serverID: number = 101;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus(): string { return this.serverStatus; }

  onCreateServer(): string { return this.serverCreationStatus = "Server was Created"; }

  onUpdateServerName(event: Event): string { return this.serverName = (<HTMLInputElement>event.target).value; };
}
