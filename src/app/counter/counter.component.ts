import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

<button (click)="increaseOrDecrese(1)">+1</button>
<button (click)="increaseOrDecrese(-1)">-1</button>
<button (click)="resetCounterToZero()">Reset to zero</button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  increaseOrDecrese(value: number): void {
    this.counter += value;
  }

  resetCounterToZero(): void {
    this.counter = 0;
  }

}
