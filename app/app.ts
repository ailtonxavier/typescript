import { Negociacao_Controller } from "./controllers/negociacao_controller.js";

const controller = new Negociacao_Controller();

const form : Element = document.querySelector(".form");

form.addEventListener("submit", (event : Event) => {
  event.preventDefault();
  controller.adicionar();
});