import { lista } from "./dados.js";

const carregarLinguagens = () => {
   for (const linguagensLista of lista) {
      const cartaoLista = `
        <div class="linguagens">
        <img
           src="./public/assets/${linguagensLista.img}"
           alt="HTML5
        "
        />
        <p>${linguagensLista.nome}</p>
        `;

      document.querySelector("#listaL").innerHTML += cartaoLista;
   }
};

carregarLinguagens();
