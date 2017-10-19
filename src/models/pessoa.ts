export class Pessoa{
    nome:String;
    key:string;
    idade:number;
    active:boolean;
    constructor(){

    }
    build(data){
        if(data.nome != undefined)
            this.nome = data.nome;
        if(data.key != undefined)
            this.key = data.key;
    }
    
}