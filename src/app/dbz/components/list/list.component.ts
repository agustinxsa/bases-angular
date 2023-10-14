import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  listOfCharacter: Character[] = [{
    name:'KRILIN',
    power: 30
  }]
}
