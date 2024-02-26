import { lista, projetos } from "./dados.js";

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

const carregarProjetos = () => {
   for (const projetosLista of projetos) {
      const cartaoProjetos = `
      <div class="projeto wow fadeInUp delay-02s">
                     <img
                        class="imgprojeto"
                        src="/public/assets/${projetosLista.img}"
                        alt=""
                     />

                     <div class="projetos2">
                        <h2>${projetosLista.name}</h2>
                        <p>
                           ${projetosLista.sobre}
                        </p>

                        <div class="tech">
                           <p>${projetosLista.tech}</p>
                        </div>
                        <div class="projetosb">
                           <a href="${projetosLista.github}"
                              target="_blank"
                              ><button class="button-projetos">
                                 GitHub
                              </button></a
                           >
                           <a href="${projetosLista.deploy}"
                              target="_blank"
                              ><button class="button-projetos">
                                 Deploy
                           </button></a
                           >
                        </div>
                     </div>
                  </div>
               </div>
      `;

      document.querySelector("#projetosL").innerHTML += cartaoProjetos;
   }
};

carregarProjetos();
