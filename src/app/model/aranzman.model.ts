import { Hotel } from "./hotel.model";
import { TuristickaAgencija } from "./turisticka.agencija.model";

export class Aranzman{
    id!: number;
    ukupnaCena!: number;
    datumRealizacije!: Date;
    placeno!: boolean;
    agencija!: TuristickaAgencija;
    hotel!: Hotel;
}