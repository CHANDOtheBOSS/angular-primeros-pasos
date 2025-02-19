import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age: number = 45;

  // get son propiedades
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  // esto es una funcion y se invoca con () al final
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{

    this.name = 'spiderman';
  }

  changeAge():void{
    this.age = 200;

  }

  resetForm(): void{
    this.name= 'Ironman';
    this.age=45;
  }

}
