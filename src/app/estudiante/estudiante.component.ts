import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  NombrePersona = "Rigoberto Andree Marroquin y Marroquin"
  Carnet = "0907-18-19627"
  Docente = "Ing. Carlos Hernández"
  Parcial = "Segundo Examen Parcial Desarrollo Web"

}
