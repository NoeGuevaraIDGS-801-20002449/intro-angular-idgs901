import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs901';

  alumno={
    matricula:1234,
    nombre:'pedro',
    edad:23,
    fechaNacimiento:new Date(),
    pago:128.38
  };
  calcular(n:number):number{
    return n*2;
  }
}

