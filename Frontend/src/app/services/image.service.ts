import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  route = 'https://localhost:7214/api/'; 

  constructor(private http: HttpClient) { }

  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(this.route + "Cartas/imagen", formData);
  }
  uploadAvatar(formData: FormData): Observable<any> {
    return this.http.post(this.route + "Jugador/imagen", formData);
  }

}
