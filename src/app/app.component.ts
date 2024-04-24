import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { on } from 'events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 image:string="assets/pic_bulboff.gif";
 onTurn:boolean=false;
 onTurnText="Encender"
 turn()
 {
    this.onTurn=!this.onTurn;
    if (this.onTurn){
      this.image="assets/pic_bulbon.gif"
      this.onTurnText="Apagar"
    }
    else{
      this.image="assets/pic_bulboff.gif"
      this.onTurnText="Encender"
    }
 }

 
}
