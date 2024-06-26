import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset, incrementOnBackend } from '../counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})

export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  incrementOnBackend() {
    this.store.dispatch(incrementOnBackend());
  }
}
