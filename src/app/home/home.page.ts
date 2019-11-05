import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from 'src/modelos/cliente';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public clientes: Cliente[];

  constructor(public navCtrl:NavController) {

    this.clientes = [
      {nome: "Camila",mensagem: "Oi ana amor da minha vida",imagem:"assets/camilacabello.jpg"},
      {nome: "Lauren",mensagem: "Eai nene vamo sair quando?",imagem:"assets/laurenjauregui.jpg"},
      {nome: "Normani",mensagem: "Miga a lauren ta te iludindo",imagem:"assets/normanikordei.jpg"},
      {nome: "Ally",mensagem: "SANGUE DE JESUS TEM PODER",imagem:"assets/allybrooke.jpg"},
      {nome: "Dinah",mensagem: "A normani te falou da lauren?",imagem:"assets/dinahjane.jpg"},
      {nome: "Shawn",mensagem: "deixa a camila em paz caralho",imagem:"assets/shawnmendes.jpg"},

    ];

  }

   selecionarCliente(clientes:Cliente){
      // alert("Essa é a(o) "+clientes.nome)

      this.navCtrl.navigateForward('/sobre');

    }
}
