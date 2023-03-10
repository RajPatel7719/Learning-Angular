import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server1',
  templateUrl: './server.component.html'
})
export class Server1Component implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => { this.server = data['server'] })
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }
}
