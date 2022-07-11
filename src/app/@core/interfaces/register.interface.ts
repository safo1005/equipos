import { IEquipo } from "./equipo.interface";

export interface IRegisterEquipo {
    nombre: string;
    valorMaximo: string;
    valorActual?: string;
}

export interface IResultRegister {
    status: boolean;
    message: string;
    equipo?: IEquipo
}