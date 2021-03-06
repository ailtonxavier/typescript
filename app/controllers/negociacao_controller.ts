import { Negociacao } from "../models/negociacao.js";
import { Negocicacoes } from "../models/negociacoes.js";
import { Negociacoes_View } from "../views/negociacoes_view.js";

export class Negociacao_Controller {
  private input_data : HTMLInputElement;
  private input_quantidade : HTMLInputElement;
  private input_valor : HTMLInputElement;
  private negociacoes = new Negocicacoes();
  private negociacoes_view = new Negociacoes_View('#negociacoes_view');
  
  constructor(){
    this.input_data = document.querySelector("#data");
    this.input_quantidade = document.querySelector("#quantidade");
    this.input_valor = document.querySelector("#valor");
    this.negociacoes_view.update(this.negociacoes);
  }

  adicionar() : void {
    const negociacao = this.criar_negociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoes_view.update(this.negociacoes)
    this.limpar_form();
  }

  criar_negociacao() : Negociacao {
    const exp = /-/g;
    const date = new Date(this.input_data.value.replace(exp, ','));
    const quantidade = parseInt(this.input_quantidade.value);
    const valor = parseFloat(this.input_valor.value);
    return new Negociacao(date, quantidade, valor);
  }

  limpar_form() : void {
    this.input_data.value = '';
    this.input_quantidade.value = '';
    this.input_valor.value = '';
    this.input_data.focus();
  }
}