import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-colsultar-produtos',
  templateUrl: './colsultar-produtos.component.html',
  styleUrls: ['./colsultar-produtos.component.css']
})
export class ColsultarProdutosComponent implements OnInit {
  //atributo para armazenar os dados dos produtos
  produtos: any[] = [];

  //injeção de dependencia
  constructor(private httpClient: HttpClient) { }

  //metodo executado quando o componente é aberto
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl +'/produtos').subscribe(
      (data) => {
        this.produtos = data as any[];
      },

      (e) => {
        console.log(e);
      }
    )
  }

  //funcao para fazer a exclusao do produto na API
  excluir(idproduto:number) : void{
    if(window.confirm('Deseja realmente excluir o produto selecionado?')){
      this.httpClient.delete(environment.apiUrl + "/produtos/" + idproduto,{responseType : 'text'}).subscribe(
        (data) => {
          alert(data); //exibir mensagem em uma janela popup
          this.ngOnInit();//recarregar a consulta de produtos
        },
        (e) =>{
          console.log(e);
        }
      )
    }
  }



}
