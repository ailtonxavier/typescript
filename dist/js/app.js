import { Negociacao_Controller } from "./controllers/negociacao_controller.js";
const controller = new Negociacao_Controller();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adicionar();
});
