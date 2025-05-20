import { Card } from "./card";

export interface CombatPlayer {
    id: number;
    name: string;
    avatar: string;
    card: Card | null;
}