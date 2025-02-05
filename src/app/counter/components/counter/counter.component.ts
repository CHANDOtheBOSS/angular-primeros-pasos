import { Component } from "@angular/core";
// usar a-component para no tener que escribir todo el componente
// component es un decorador que transforma mi clase en un componente
@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

              <button (click)="increaseBy(+1)" >+1</button>
              <button (click)="resetCounter()">reset</button>
              <button (click)="increaseBy(-1)" >-1</button>`
})

export class CounterComponent {
  public counter:number = 10;

  increaseBy( value:number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }


}
