import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  cargando = true;


  constructor(private http: HttpClient) { 


  }


  getInstagram(token : string){
    const info = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=10`;
    return this.http.get(info);
  }

}
