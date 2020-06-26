import { Component, OnInit/*, Input */} from '@angular/core';
declare var $;

@Component({
  selector: 'app-main-slider-two',
  templateUrl: './main-slider-two.component.html',
  styleUrls: ['./main-slider-two.component.css']
})
export class MainSliderTwoComponent implements OnInit {

    openClose : string = "Cerrar";

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(){ 
      $("#accordionExample").hide(3000);
    }, 45000);  
  }

  btnOpenClose(value: string){
     if(value=="Cerrar"){
        setTimeout(function(){ 
           $("#accordionExample").hide(1500);
         }, 1000);        
     }
  }

}
