import { Negociacao } from "../models/negociacao.js";
import { Negocicacoes } from "../models/negociacoes.js";

export class Negociacoes_View {

  private elemento : HTMLElement;

  constructor(seletor : string){
    this.elemento = document.querySelector(seletor);
  }

  template(model : Negocicacoes) : string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.lista().map(negociacao => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `; /* retorn um html válido em template string com `` */
  }
  update(model : Negocicacoes) : void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}