import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [`
    .online{
      color: white;
    }

  `]
})
export class DirectivesComponent {
  serverID: number = 101;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string { return this.serverStatus; }

  onCreateServer(): string {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus = "Server was Created...!, Name is " + this.serverName;
  }

  onUpdateServerName(event: Event): string { return this.serverName = (<HTMLInputElement>event.target).value; };

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
