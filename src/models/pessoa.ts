import { PessoaInterface } from "./pessoaInterface";

export class Pessoa implements PessoaInterface {
    nome: String;
    key: string;
    idade: number;
    active: boolean;

}