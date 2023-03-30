import { Component } from '@angular/core';
import { Loja } from 'src/app/sell/models/lojas.model';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.scss']
})
export class LojasComponent {
  titulo = "Nossos produtos estão disponiveis nessas lojas físicas";
  lojaAExibir = -1;
  lojas: Array<Loja> = [
    {
      descricao: 'ShopTime',
      endereco: 'Avenida das Graças, n: 993, bairro: Olimpia-SP',
      imagem: '../../../assets/shoptime.jpg',
      remota: true
    },
    {
      descricao: 'Americanas',
      endereco: 'Avenida das Graças, n: 993, bairro: Olimpia-SP',
      imagem: '../../../assets/americanas.jpg',
      remota: true

    },
    {
      descricao: 'Carrefour',
      endereco: 'Avenida das Graças, n: 993, bairro: Olimpia-SP',
      imagem: '../../../assets/carrefour.jpg',
      remota: false

    }

  ]


  constructor() { }


  ngOnInit(): void {

  }

  exibirLoja(index: number) {
    this.lojaAExibir = index;
  }

}
