import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/sell/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  titulo = "Produtos em promoção";

  exibeProduto = true


  produtos: Array<Product> = [
    {
      descricao: "Ovo Sonho de Valsa",
      preco: 50,
      quantidade: 0,
      imagem: "../../../assets/ovo-sonhoDeValsa.webp",
      disponivel: false
    },

    {
      descricao: "Kinder Ovo",
      preco: 100,
      quantidade: 10,
      imagem: "../../../assets/kinder.jpg",
      disponivel: true
    },
    {
      descricao: "Ovo Kikat",
      preco: 100,
      quantidade: 20,
      imagem: "../../../assets/kitkat.webp",
      disponivel: true
    },
    {
      descricao: "Ovo Lacreme",
      preco: 200,
      quantidade: 5,
      imagem: "../../../assets/lacreme.png",
      disponivel: true
    },
    {
      descricao: "Ovo Ouro branco",
      preco: 100,
      quantidade: 30,
      imagem: "../../../assets/Ouro-branco.webp",
      disponivel: true
    },
    {
      descricao: "Ovo Fine",
      preco: 100,
      quantidade: 30,
      imagem: "../../../assets/fini.webp",
      disponivel: true
    }



  ]
  constructor() { }


  ngOnInit(): void {

  }
  precoComDesconto(preco: number) {
    return preco * 0.90;
  }
  obterPrecoDesconto(produtos: Product) {
    produtos.precoDesconto = this.precoComDesconto(produtos.preco);
  }
  comprar() {
    alert("produto comprado com sucesso");
  }

  clicouTag() {
    alert("você passou o mouse em cima de uma tag")
  }

  clicounoTeclado(event: any) {
    console.log(event.target.value);

  }
  exibeProdutoSimNao() {
    this.exibeProduto = !this.exibeProduto;
  }



}
