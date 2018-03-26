import { HttpClient } from '@angular/common/http';
import { Meses } from './../meses';
import { Injectable } from "@angular/core";
import { Jogadores } from '../jogadores';
import { Observable } from 'rxjs/Observable';
import {RequestOptionsArgs, Http,  RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class MesesServices
{
    constructor(private httpClient:HttpClient,private http:Http){}
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private jogadores:Jogadores[];
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
    
    /*getMensalidade(id:string)
    {
        let params = new URLSearchParams();
        params.set('id',id);
        //servidor
        return this.httpClient.get('https://colisao.000webhostapp.com/php/mensalidadeJaneiro.php'+'?id='+id);
        //pc do ccsp
        //return this.httpClient.get('http://192.168.0.106/portifoliogithub/registro/app/php/mensalidadeJaneiro.php'+'?id='+id);        
        //pc de casa
        //return this.httpClient.get<any>('http://192.168.1.58/arquivosGit/registro/app/php/mensalidadeJaneiro.php?id='+ id);        
    }*/
    getMensalidade(id:string)
    {
        let params = new URLSearchParams();
        params.set('id',id);
        //servidor
        //return this.httpClient.get('https://colisao.000webhostapp.com/php/mensalidadeJaneiro.php'+'?id='+id);
        //pc do ccsp
        return this.httpClient.get('http://192.168.0.106/portifoliogithub/registro/app/php/mensalidadeJaneiro.php'+'?id='+id);        
        //pc de casa
        //return this.httpClient.get<any>('http://192.168.1.58/arquivosGit/registro/app/php/mensalidadeJaneiro.php?id='+ id);        
    }    
    updateMensalidade(jogador:Jogadores):Observable<Jogadores>{
        let json = JSON.stringify(jogador);
        let myheaders ={
            headers: new HttpHeaders({
                'Content-Type':'application/json; charset=UTF-8',               
            })
        };
        //cabe.append('Content-Type','application-x-www-form-urlencoded');
        //return this.httpClient.post<Jogadores>('http://validate.jsontest.com',params,myheaders);
        //return this.httpClient.post<Jogadores>('http://colisao.000webhostapp.com/php/mensalidade.php',json);
        
        return this.httpClient.post<Jogadores>('http://192.168.0.106/portifoliogithub/registro/app/php/mensalidade.php',json);
    }  
    somaMensalidade(id:string)
    {
        return this.httpClient.get('http://192.168.0.106/portifoliogithub/registro/app/php/mensalidadeJaneiro.php'+'?idMes='+id);
    }
}