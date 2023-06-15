import {Component} from '@angular/core'

@Component({
    selector:'app-ievn',
    template:`
    <form>
    <div>
        <label for="">Matricula: </label>
        <input type="text" value={{alumno.matricula}}>
    </div>
    <div>
    <label for="">Nombre: </label>
    <input type="text" value={{alumno.nombre|uppercase}}>
    </div>
    <div>
    <label for="">Edad: </label>
    <input type="text" value={{alumno.edad}}>
    </div>
    <div>
    <label for="">Fecha de nacimiento: </label>
    <input type="text" value={{alumno.fechaNacimiento|date}}>
    </div>
    <div>
    <label for="">Pago: </label>
    <input type="text" value={{alumno.pago|currency}}>
    </div>
    <div>
    <button class="btn btn-primary"> Ingresa</button>
    </div>
    </form>`
})


export class ievnComponents{
    constructor(){}

    alumno={
        matricula:1234,
        nombre:'pedro',
        edad:23,
        fechaNacimiento:new Date(),
        pago:128.38
      };
}
