
function removeErrorMessage() {
    let errorMessage = document.getElementById("error-message")

    if(errorMessage != null) {
        errorMessage.remove()
    }
}


function excluirJogo(idJogo) {

    let excluirJogo = confirm("realmente deseja excluir esse jogo?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id="  + idJogo, "_SELF")
    }

}


