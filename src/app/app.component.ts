import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'hola mundito';
  public counter: number = 0;

  increaseBy(): void {
    this.counter += 1;
  };

  decreaseBy(): void {
    this.counter -= 1;
  };

  increaseOrDecrese(value: number): void {
    this.counter += value;
  };

}
