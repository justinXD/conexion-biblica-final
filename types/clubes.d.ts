export interface IClub {
    club: string,
    puntaje: number
}

export interface IOpcionRespuesta {
    opcion: string,
    isCorrecta: boolean
}

export interface IPregunta {
    pregunta: string,
    opciones: IOpcionRespuesta[]
}

export interface IPreguntas {
    preguntas: IPregunta[]
}

export interface IPreguntasPorClub extends IPreguntas, IClub {}