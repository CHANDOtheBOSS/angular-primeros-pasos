import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListdbzComponent } from './components/listdbz/listdbz.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';





@NgModule({
  declarations: [
    MainPageComponent,
    ListdbzComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
