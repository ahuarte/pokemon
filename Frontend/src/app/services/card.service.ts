import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  route: string = 'https://localhost:7214/api/Cartas'; 

  constructor(private http: HttpClient) { }

  getCardById(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.route}/${id}`);
  }
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.route);
  }

  postCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.route, card);
  }
}
