import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  //atributo
  mensagem: string='';

  constructor(private httpCliente: HttpClient,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Capturar o id enviado pela URL
    const idProduto = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //consultar o produto na api atraves do id
    this.httpCliente.get(environment.apiUrl + "/produtos/" + idProduto).subscribe(
      (data:any) => {
        //preenchendoo os campos do formualrio com os dados do produto
        this.formEdicao.patchValue(data);

      },
      (e) => {
        console.log(e);
      }
    )
  }

  //monstando a estrutura do formulario
  formEdicao = new FormGroup({
    //campos do formulario.... serao os mesmos campos que temos na colsulta....iremos acrescentar o id

    idProduto: new FormControl(''),
    nome : new FormControl('',[Validators.required]),
    preco : new FormControl('',[Validators.required]),
    quantidade : new FormControl('',[Validators.required]),
    descricao : new FormControl('',[Validators.required]),
  });

  //Acessando o formulario / campos na pagina HTML
  get form():any{
    return this.formEdicao.controls;
  }

  //funcao para fazer a camada do edicao na api
  onSubmit():void{
    this.httpCliente.put(environment.apiUrl + '/produtos', this.formEdicao.value,{responseType: 'text'}).subscribe(
      data => {
        this.mensagem = data;
      },
      e => {
        this.mensagem = "Ocorreu um erro, a edição não foi realizada.";
        console.log(e);
      }
    )
  }


}
