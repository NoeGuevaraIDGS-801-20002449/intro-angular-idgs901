import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  alumnosIric:any[]=[
    {
      matricula:1234,
      nombre:'Ana',
      edad:23,
      correo:'ana@gmail.com',
      foto:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fmujer%2520bonita%2F&psig=AOvVaw0S6qDlwdiPwmSzf38ivF9m&ust=1686879241222000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjihIKRxP8CFQAAAAAdAAAAABAR'
    },
    {
      matricula:2345,
      nombre:'Angela',
      edad:23,
      correo:'angela@gmail.com',
      foto:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cosmopolitan.com%2Fes%2Fconsejos-planes%2Ffamilia-amigos%2Fa36355656%2Ftiktok-editar-fotos%2F&psig=AOvVaw0S6qDlwdiPwmSzf38ivF9m&ust=1686879241222000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjihIKRxP8CFQAAAAAdAAAAABAZ'
    },
    {
      matricula:97689,
      nombre:'Diego',
      edad:23,
      correo:'diego@gmail.com',
      foto:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gq.com.mx%2Fcuidado-personal%2Farticulo%2Fcomo-salir-guapo-en-las-fotos&psig=AOvVaw0S6qDlwdiPwmSzf38ivF9m&ust=1686879241222000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjihIKRxP8CFQAAAAAdAAAAABAh'
    }
  ]
}
