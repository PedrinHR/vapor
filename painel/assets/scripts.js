function excluirJogo(idJogo) {

    let excluirJogo = confirm("realmente deseja excluir esse jogo?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id="  + idJogo, "_SELF")
    }

}