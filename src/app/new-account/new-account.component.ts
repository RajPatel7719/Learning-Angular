import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  // TODO   :     Inject service
  constructor(private logService: LoggingService, private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({ name: accountName, status: accountStatus });
    this.accountsService.addAccount(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }
}
