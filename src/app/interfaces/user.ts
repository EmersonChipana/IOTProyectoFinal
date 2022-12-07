export interface User {
    id: number;
    focos: Foco[];
    secuencia: Secuencia[];
}


export interface Foco{
    id: String;
    nombre: String;
}

export interface Secuencia{
    foco: String;
    time: number;
    red: number;
    green: number;
    blue: number;
}
