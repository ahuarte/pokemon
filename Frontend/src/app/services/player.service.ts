import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  route: string = 'https://localhost:7214/api/Jugador'; 

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.route);
  }

  postPlayer(player: Player): Observable<number> {
    console.log('En el servicio ', player);
    return this.http.post<number>(this.route, player);
  }
}
