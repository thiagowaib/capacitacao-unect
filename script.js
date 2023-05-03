const clickDoBotao = () => {
    const background = document.getElementById("background")
    
    // Via Atributos
    // background.style.backgroundColor = "#0000FFA0"
    if(background.classList.contains("quandoEstaClicado")) {
        background.classList.remove("quandoEstaClicado")
    } else {
        background.classList.add("quandoEstaClicado")
    }
}


const botaoTeste = document.getElementById("botao-clica")
botaoTeste.onclick = clickDoBotao





const mostrarModal = () => {
    const modal = document.getElementById("fundo-modal")
    modal.classList.add("mostrar")
}

const abrirModal = document.getElementById("botao-modal")
abrirModal.onclick = mostrarModal

const esconderModal = () => {
    const modal = document.getElementById("fundo-modal")
    modal.classList.remove("mostrar")
}

const fecharModal = document.getElementById("fechar-modal")
fecharModal.onclick = esconderModal