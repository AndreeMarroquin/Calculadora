import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  cantidadone = 0;
  cantidadtwo = 0;
  resultado1 = 0;
  Operacion = "Presionar los botones para realizar operaciones.";
  opracion1 = "Valores no agregados";
  opracion2 = "Valores no agregados";


  multiplication() {
    let res = this.resultado1 = (this.cantidadone * this.cantidadtwo);
    console.log(res);
    this.Operacion = "Multiplicación realizada"
  }

  Divicion() {
    let res = this.resultado1 = (this.cantidadone / this.cantidadtwo);
    console.log(res);
    this.Operacion = "División realizada"
  }

  Suma() {
    let res = this.resultado1 = (this.cantidadone + this.cantidadtwo);
    console.log(res);
    this.Operacion = "Suma realizada"
  }

  Resta() {
    let res = this.resultado1 = (this.cantidadone - this.cantidadtwo);
    console.log(res);
    this.Operacion = "Resta realizada"
  }

  ingresar(event: Event) {
    this.opracion2 = (<HTMLInputElement>event.target).value

  }
  ingresar2(event: Event) {
    this.opracion1 = (<HTMLInputElement>event.target).value

  }
  limpiar() {
    this.cantidadtwo = 0;
    this.cantidadone = 0;
    this.opracion2 = "Valores no agregados";
    this.opracion1 = "Valores no agregados";
    this.Operacion = "Precionar botones para realizar las operaciones";
    this.resultado1 = 0;
  }


  constructor() {
    setTimeout(() => {
      this.habilitar = false
    }, 10000);
  }

  ngOnInit(): void {
  }
  habilitar = true;

}
