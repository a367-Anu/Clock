import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import  moment from 'moment';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {

  currentTime: Observable<string> = interval(1000).pipe(
    map(() => moment().format('h:mm:ss A'))
  );

}
