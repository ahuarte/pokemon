import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  route: string = 'http://localhost:3000/cards'; 

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.route);
  }

  postCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.route, card);
  }
}
