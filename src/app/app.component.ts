import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gafa-web';

  anio : number = new Date().getFullYear();
  mes : number = new Date().getMonth();
  dia : number = new Date().getDay();

  showPadre: boolean;

}
