import { Subscription } from 'rxjs';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just Test.!' }];
  accounts: { name: string, status: string }[] = [];
  userActivated: boolean = false;
  private activateSub: Subscription;

  constructor(private accountsService: AccountsService, private userService: UserService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    this.activateSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed.!'
  // }

  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }

  ngOnDestroy() {
    this.activateSub.unsubscribe();
  }

}
