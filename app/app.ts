import { Negociacao_Controller } from "./controllers/negociacao_controller.js";

const controller = new Negociacao_Controller();

const form : Element = document.querySelector(".form");

form.addEventListener("submit", (event : Event) => {
  // toda vez que for chamado o submit esse evento ocorrerá
  event.preventDefault(); // evita o refresh da página
  controller.adicionar();
});