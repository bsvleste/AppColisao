import { Meses } from './meses';
import { Injectable } from "@angular/core";

@Injectable()
export class MesesServices
{
    private meses:Meses[] = [
        {id:1,descricao:'Janeneiro'},
        {id:2,descricao:'Fevereiro'},
        {id:3,descricao:'Março'},
        {id:4,descricao:'Abril'},
        {id:5,descricao:'Maio'},
        {id:6,descricao:'Junho'},
        {id:7,descricao:'Julho'},
        {id:8,descricao:'Agosto'},
        {id:9,descricao:'Setembro'},
        {id:10,descricao:'Outubro'},
        {id:11,descricao:'Novembro'},
        {id:12,descricao:'Dezembro'},
    ];
    //retorna os meses e os id
    getMeses()
    {
       return this.meses;
    }
    //pega um por um do getMeses
    getMes(id:number)
    {
        let mes = this.getMeses();
        for(let i of mes)
        {
            let mes  = i;
            if(mes.id == id)
            {
                return mes;
            }
        }
        return null;
    }
    constructor(){}
}