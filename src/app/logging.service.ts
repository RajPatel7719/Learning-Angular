import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChange(status: string) {
    console.log('A Server Status Changed, new Status: ' + status);
  }
}
