import {Tags} from "./tags.model";

export class Gasto {
    id?: number;
    nomePessoa: string;
    descricao: string;
    valor: number;
    dt: string;
    ativo: boolean;
    tags: Tags[];
}
