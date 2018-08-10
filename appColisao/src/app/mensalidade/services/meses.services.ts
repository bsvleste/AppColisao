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
import { HttpParams } from '@angular/common/http';

@Injectable()
export class MesesServices
{
    constructor(private httpClient:HttpClient,private http:Http){}
    
    public headers = new Headers({ 'Content-Type': 'application/json' });
    public jogadores:Jogadores[];
    public meses:Meses[] = [
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
        let json = JSON.stringify(id);        
        let p = new HttpParams();
        p = p.append('id',id);

        //servidorhttp://
        //return this.httpClient.get('https://colisao.000webhostapp.com/php/mensalidadeJaneiro.php', { params:p });
        //pc do ccsp
        //return this.httpClient.get('http://192.168.0.125/portifoliogithub/registro/app/php/mensalidadeJaneiro.php'+'?id='+id);        
        //pc no ccsp
        //return this.httpClient.get<any>('http://192.168.0.158/arquivosGit/registro/app/php/mensalidadeJaneiro.php?id='+ id);        
        //pc em casa
        return this.httpClient.get<any>('http://192.168.1.32/arquivosGit/registro/app/php/mensalidadeJaneiro.php?id='+ id);        
    }    
    updateMensalidade(jogador:Jogadores):Observable<Jogadores>{
        let json = JSON.stringify(jogador);
        let myheaders ={
            headers: new HttpHeaders({
                'Content-Type':'application/json; charset=UTF-8',               
            })
        };
        //cabe.append('Content-Type','application-x-www-f orm-urlencoded');
        //return this.httpClient.post<Jogadores>('http://validate.jsontest.com',params,myheaders);
        //return this.httpClient.post<Jogadores>('http://colisao.000webhostapp.com/php/mensalidade.php',json);
        //pc do ccsp
        //return this.httpClient.post<Jogadores>('http://192.168.0.125/portifoliogithub/registro/app/php/mensalidade.php',json);
        //noteBook
        //return this.httpClient.post<Jogadores>('http://192.168.0.158/arquivosGit/registro/app/php/mensalidade.php',json);
        //pc em casa
        return this.httpClient.post<Jogadores>('http://192.168.1.32/arquivosGit/registro/app/php/mensalidade.php',json);
    }
    getBidCad()
    {
        //return this.httpClient.get('http://192.168.0.125/portifoliogithub/registro/app/php/bidCadastrado.php');
        //pc no ccsp
        //return this.httpClient.get('http://192.168.0.158/arquivosGit/registro/app/php/bidCadastrado.php');  
        //pc em casa
        return this.httpClient.get('http://192.168.1.32/arquivosGit/registro/app/php/bidCadastrado.php');  
    }      
}