import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jubilacion: number = 0;
  INSSJP: number = 0;
  osseg: number = 0;
  sindicato: number = 0;
  show: boolean = false;

  constructor() { }

  items: Item[] = [
    {cod: '20',
    plata:0},
    {cod: '30',
    plata:0},
    {cod: '57',
    plata:0},
    {cod: '280',
    plata:0},
    {cod: '281',
    plata:0},
    {cod: '330',
    plata:0},
    {cod: '350',
    plata:0},
    {cod: '5907',
    plata:0},
    {cod: 'aumento',
    plata:0}
  ]



  ngOnInit(): void {
  }


  calcular(){
    this.show= true;
    
  };

}
