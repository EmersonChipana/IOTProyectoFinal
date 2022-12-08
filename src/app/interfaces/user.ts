export interface User {
    id: string;
    focos: Foco[];
    secuencias: Secuencia[];
}


export interface Foco{
    id: String;
    nombre: String;
}

export interface Secuencia{
    nombre: String;
    loops: Loop[];
}

export interface Loop{
    foco: String;
    time: number;
    red: number;
    green: number;
    blue: number;
}
