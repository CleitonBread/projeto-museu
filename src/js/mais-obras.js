document.addEventListener("DOMContentLoaded", () => {
  // pega todos os containers de carrossel que temos na página
  const containers = document.querySelectorAll(".maiores-obras, .carrossel-conteporaneo");

  // pega todas as setas por id (mesmo com IDs duplicados, querySelectorAll retorna todos na ordem)
  const todasSetasAvancar = document.querySelectorAll("#btn-avancar");
  const todasSetasVoltar  = document.querySelectorAll("#btn-voltar");

  // para cada container, criamos uma "instância" do carrossel
  containers.forEach((container, idx) => {
    const imagensPainel = container.querySelectorAll(".imagem-painel");
    const setaAvancar = todasSetasAvancar[idx] || container.querySelector(".btn-avancar");
    const setaVoltar  = todasSetasVoltar[idx]  || container.querySelector(".btn-voltar");

    // se não tiver imagens, sai
    if (!imagensPainel || imagensPainel.length === 0) return;

    // indice local do carrossel
    let imagemIndice = 0;

    // funções (mesma lógica que tu usou)
    function esconderImagens(){
      imagensPainel.forEach(imagem =>{
        imagem.classList.remove("mostrar");
      });
    }

    function mostrarImagens(){
      imagensPainel[imagemIndice].classList.add("mostrar");
    }

    // atualiza estado das setas (adiciona/remove final-imagens)
    function atualizarSetas(){
      if (!setaAvancar || !setaVoltar) return;

      // remove sempre antes
      setaAvancar.classList.remove("final-imagens");
      setaVoltar.classList.remove("final-imagens");

      // se estiver no começo
      if (imagemIndice === 0){
        setaVoltar.classList.add("final-imagens");
      }
      // se estiver no fim
      if (imagemIndice === imagensPainel.length - 1){
        setaAvancar.classList.add("final-imagens");
      }
    }

    // evento avançar (protege se seta inexistir)
    if (setaAvancar) {
      setaAvancar.addEventListener("click", function(e){
        e.preventDefault();
        // quando clicar, remove a classe da seta oposta (como no teu original)
        if (setaVoltar) setaVoltar.classList.remove("final-imagens");

        const totalDeImagens = imagensPainel.length - 1;
        if (imagemIndice === totalDeImagens){
          // já no fim: marca e não faz mais nada
          setaAvancar.classList.add("final-imagens");
          return;
        }

        imagemIndice++;
        esconderImagens();
        mostrarImagens();
        atualizarSetas();
      });
    }

    // evento voltar
    if (setaVoltar) {
      setaVoltar.addEventListener("click", function(e){
        e.preventDefault();
        if (setaAvancar) setaAvancar.classList.remove("final-imagens");

        if (imagemIndice === 0){
          setaVoltar.classList.add("final-imagens");
          return;
        }

        imagemIndice--;
        esconderImagens();
        mostrarImagens();
        atualizarSetas();
      });
    }

    // inicializa o carrossel: mostra primeira imagem e atualiza as setas
    esconderImagens();
    mostrarImagens();
    atualizarSetas();
  });
});
