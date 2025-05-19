import { Card } from "./card";

export interface CombatPlayer {
    name: string;
    avatar: string;
    card: Card | null;
}