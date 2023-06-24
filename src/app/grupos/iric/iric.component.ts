import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;

  showImagen():void{
    this.muestraImagen=!this.muestraImagen;
  }
  
  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:'Ana',
      edad:23,
      correo:'ana@gmail.com',
      foto:'https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=600',
      calf:6.7
    },
    {
      matricula:2345,
      nombre:'Angela',
      edad:23,
      correo:'angela@gmail.com',
      foto:'https://images.pexels.com/photos/2836485/pexels-photo-2836485.jpeg?auto=compress&cs=tinysrgb&w=600',
      calf:4.8
    },
    {
      matricula:97689,
      nombre:'Alejandra',
      edad:23,
      correo:'alejandra@gmail.com',
      foto:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
      calf:3.5
    }
  ]

  onCalificaClick(message:string){
    this.alumnoTitle=`alumnos ${message}`;
  }
}
