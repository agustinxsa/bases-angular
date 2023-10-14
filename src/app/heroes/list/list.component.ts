import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['spiderman', 'hulk', 'superman', 'goku'];
  public deletedHero?: string = '';

  removeLastHeroOnList(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
