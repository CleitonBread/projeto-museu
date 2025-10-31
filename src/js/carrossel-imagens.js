document.addEventListener("DOMContentLoaded", () => {
    //Pegando todas as imagens dos carrosseis de imagens
    let imagensPainel = document.querySelectorAll(".imagem-painel");

    //pegando as setas de Avançar e voltar
    const setaAvancar = document.getElementById("btn-avancar");
    const setaVoltar = document.getElementById("btn-voltar");

    //indice das imagens utilizado nas funções
    let imagemIndice = 0;

    //funções:

    function esconderImagens() {
        imagensPainel.forEach(imagem => {
            imagem.classList.remove("mostrar");
        })
    }

    function mostrarImagens() {
        imagensPainel[imagemIndice].classList.add("mostrar");
    }

    setaAvancar.addEventListener("click", function () {
        setaVoltar.classList.remove("final-imagens");

        let totalDeImagens = imagensPainel.length - 1;

        imagemIndice++;
        esconderImagens();
        mostrarImagens();

        if (imagemIndice === totalDeImagens) {
            setaAvancar.classList.add("final-imagens");
        }
    })

    setaVoltar.addEventListener("click", function () {
        setaAvancar.classList.remove("final-imagens");

        imagemIndice--;
        esconderImagens();
        mostrarImagens();

        if (imagemIndice === 0) {
            setaVoltar.classList.add("final-imagens");
        }
    })
});
