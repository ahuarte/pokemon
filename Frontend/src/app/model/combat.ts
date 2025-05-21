import { JugadorCombate } from "./jugadorCombate";

export interface Combat {
    id: number,
    turno: number;
    jugadores: JugadorCombate[];
}