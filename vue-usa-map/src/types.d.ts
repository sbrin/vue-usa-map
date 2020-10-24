export interface MapPath {
    id: string;
    name: string;
    d: string;
}

export enum ChartType {
    Population = "POPULATION",
    Jobs = "JOBS",
}

export interface DataJson {
    [key: string]: ChartData;
}

export interface MapJson {
    [key: string]: string;
}

export interface State {
    id: string;
    name: string;
}

export interface ChartData {
    [key: string]: number;
}
