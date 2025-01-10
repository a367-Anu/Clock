import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import  moment from 'moment';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit, OnDestroy{
  currentTime: string = '';
  timeSubscription: Subscription | null = null;

  ngOnInit(): void {
    const timeObservable: Observable<string> = interval(1000).pipe(
      map(() => moment().format('h:mm:ss A'))
    );

    this.timeSubscription = timeObservable.subscribe((time: string) => {
      this.currentTime = time;
    });
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
