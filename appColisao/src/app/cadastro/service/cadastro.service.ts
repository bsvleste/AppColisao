import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
/**
* Classe responsevel pelos servicos de cadastro, alteração e excluir usuarios
 * a variavel http realizara todos os recursos do crud 
 */

@Injectable()
export class CadastroService
{
    //a variavel http sera a responsavel por fazer a conexao com o banco de dados 
    constructor(private http:HttpClient){}

    //retorna todos os usuarios cadastrados
    getUsuarios()
    {   
        //pc no ccsp
        //return this.http.get<any>('http://192.168.0.158/arquivosGit/registro/app/php/chamaJogadorId.php');       
        //pc em casa
        return this.http.get<any>('http://192.168.0.158/arquivosGit/registro/app/php/chamaJogadorId.php');       
    }
    getJogador(idJogador)
    {
        let id = parseInt(idJogador);
        //pc no ccsp
        //return this.http.get<any>('http://192.168.0.158/arquivosGit/registro/app/php/chamaJogadorId.php?id='+id);       
        //pc em casa
        return this.http.get<any>('http://192.168.0.158/arquivosGit/registro/app/php/chamaJogadorId.php?id='+id);       
    }
    //deleta um jogador
    deletaJogador(idJogador)
    {
        let id = {'id':parseInt(idJogador)}
        return this.http.post<any>('http://192.168.0.158/arquivosGit/registro/app/php/deletaJogador.php',id);       
    }
    alterarPermissao(permissao)
    {
        let per = permissao;
        return this.http.post<any>('http://192.168.0.158/arquivosGit/registro/app/php/alteraPermissao.php',per);       
    }
}