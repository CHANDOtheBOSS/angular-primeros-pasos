import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-listdbz',
  templateUrl: './listdbz.component.html',
  styleUrl: './listdbz.component.css'
})
export class ListdbzComponent {

  @Input()
  public characterList: Character[]= [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{

    if( !id) return;

   // console.log({id});

    this.onDelete.emit(id);
  }

}
