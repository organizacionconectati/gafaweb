import { Component, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/services/instagram.service';
import { ReactiveFormsModule } from '@angular/forms';

declare var $;
@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})
export class GallerySectionComponent implements OnInit {

  instagram : any[];
  accessToken: String = "265048197.9412cbc.01bc6f6f384445a9a1af685bde7b7b56";

  constructor(public instagramService: InstagramService) { 

  }

  ngOnInit(): void {
    this.getInstagram(this.accessToken);
    this.getLoadFilterList();
  }

  getInstagram(accessToken){
    this.instagramService.getInstagram(accessToken).
      subscribe(info =>{
        console.log(info);
        this.instagram = info['data'];
      })
    
  }

   getLoadFilterList(){
    if($('.filter-list').length){
      $('.filter-list').mixItUp({});
    }
    $('.example-popover').popover({
      container: 'body'
    })
  }


}
