import { Negociacao } from "../models/negociacao.js";
import { Negocicacoes } from "../models/negociacoes.js";
import { Negociacoes_View } from "../views/negociacoes_view.js";
export class Negociacao_Controller {
    constructor() {
        this.negociacoes = new Negocicacoes();
        this.negociacoes_view = new Negociacoes_View('#negociacoes_view');
        this.input_data = document.querySelector("#data");
        this.input_quantidade = document.querySelector("#quantidade");
        this.input_valor = document.querySelector("#valor");
        this.negociacoes_view.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criar_negociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoes_view.update(this.negociacoes);
        this.limpar_form();
    }
    criar_negociacao() {
        const exp = /-/g;
        const date = new Date(this.input_data.value.replace(exp, ','));
        const quantidade = parseInt(this.input_quantidade.value);
        const valor = parseFloat(this.input_valor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpar_form() {
        this.input_data.value = '';
        this.input_quantidade.value = '';
        this.input_valor.value = '';
        this.input_data.focus();
    }
}
