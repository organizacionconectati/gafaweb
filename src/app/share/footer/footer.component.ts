import { Component, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/services/instagram.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio : number = new Date().getFullYear();
  instagram : any[];
  accessToken: String = "265048197.9412cbc.01bc6f6f384445a9a1af685bde7b7b56";


  constructor(public instagramService: InstagramService) { }

  ngOnInit(): void {
    this.getInstagram(this.accessToken);
  }

  getInstagram(accessToken){
    this.instagramService.getInstagram(accessToken).
      subscribe(info =>{
        //console.log(info);
        this.instagram = info['data'];
      })
    
  }

}
