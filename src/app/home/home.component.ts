import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, interval, map, Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    // TODO   :   Observable
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Counter is Greater than 3'));
        }
        count++;
      }, 1000);
    });



    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => { return data > 0 }), map((data: number) => {
      return 'Round' + (data + 1)
    })).subscribe((data) => {
      console.log(data);
    }, error => {
      console.warn(error);
      alert(error.message);
    }, () => {
      console.log('Completed...!');

    });
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();

  }
}
