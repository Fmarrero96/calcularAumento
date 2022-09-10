import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  antesjubilacion: number = 0;
  antesINSSJP: number = 0;
  antesosseg: number = 0;
  antessindicato: number = 0;
  nuevoJubilacion: number = 0;
  nuevoINSSJP: number = 0;
  nuevoOsseg: number = 0;
  nuevoSindicato: number = 0;
  show: boolean = false;
  nuevoBruto: number = 0;
  noRemunerativo: number = 0;
  nuevaRetenciones: number = 0;
  nuevoNeto: number = 0;
  viejoBruto: number = 0;
  viejasRetenciones: number = 0;
  viejoNeto: number = 0;
  sindicatOk : boolean =false;

  item20:number = 0;
  item30:number = 0;
  item57:number = 0;
  item280:number = 0;
  item281:number = 0;
  item330:number = 0;
  item350:number = 0;
  item5907:number = 0;

  constructor() { }

  items: Item[] = [
    {cod: '20',
    descriptivo:' - Basico',
    plata:0},
    {cod: '30',
    descriptivo:' - Ex Adicional',
    plata:0},
    {cod: '57',
    descriptivo:' - Cuenta a Futuros Aumentos',
    plata:0},
    {cod: '280',
    descriptivo:' - Presentismo',
    plata:0},
    {cod: '281',
    descriptivo:' - Productividad',
    plata:0},
    {cod: '330',
    descriptivo:' - Canasta Pass',
    plata:0},
    {cod: '350',
    descriptivo:' - Almuerzo',
    plata:0},
    {cod: '5907',
    descriptivo:' - Comp mayor gasto',
    plata:0},
    {cod: 'Aumento',
    descriptivo:'',
    plata:0}
  ]



  ngOnInit(): void {
  }


  calcular(){
    this.show= true;
    const aumento= (this.items[8].plata * 0.01);
    this.item20 = this.items[0].plata + this.items[2].plata;
    this.item30 = this.items[1].plata * (aumento +1);
    this.item57 = this.item20 * aumento;
    this.item280 = this.items[3].plata;
    this.item281 = this.items[4].plata * (aumento +1);
    this.item330 = this.items[5].plata;
    this.item350 = this.items[6].plata *1.06;
    this.item5907 = this.items[7].plata;
    this.nuevoBruto = this.item20 + this.item30 + this.item57 +this.item280 + this.item281 + this.item330 + this.item350;
    this.noRemunerativo = this.item5907;
    this.nuevoJubilacion= this.nuevoBruto * 0.11;
    this.nuevoINSSJP = this.nuevoBruto *0.03;
    this.nuevoOsseg = this.nuevoBruto *0.03;
    if (this.sindicatOk){
      this.nuevoSindicato = this.nuevoBruto * 0.01;
    }
    this.nuevaRetenciones = this.nuevoJubilacion + this.nuevoINSSJP + this.nuevoOsseg + this.nuevoSindicato;
    this.nuevoNeto = this.nuevoBruto - this.nuevaRetenciones + this.noRemunerativo;
      
  };

  sindicatoToggle(){
    this.sindicatOk = !this.sindicatOk;
  }

  };

