import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';

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
