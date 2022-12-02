
// function removeErrorMessage() {
//     const errorMessage = document.getElementById("error-message")

//     if(errorMessage != null) {
//         errorMessage.remove()
//     }
// }


function excluirJogo(idJogo) {

    const excluirJogo = confirm("realmente deseja excluir esse jogo?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id="  + idJogo, "_SELF")
    }

}

function removerElementoPorId(idElemento) {
    let elemento = document.getElementById(idElemento)

    if (elemento != null) {
        elemento.remove()
    }


}
