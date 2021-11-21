import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aplicacion';

 Texto:string = 'Hola Mundo'

  Alerta(){
     
      alert(this.Texto)
  }
}
