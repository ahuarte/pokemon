import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  route: string = 'https://localhost:7214/api/Jugadores'; 

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.route);
  }

  postPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.route, player);
  }
}
