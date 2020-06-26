import { Component, OnInit /*,EventEmitter, Output*/ } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name : string = "Inicio";

  //@Output()
  //showOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    //this.showOutput.emit(true);
  }

  letterMenu(input :string){
    this.name = input;
  }

  /*
  sliderShow(input :boolean){
    this.showOutput.emit(input);
  }
*/

}
