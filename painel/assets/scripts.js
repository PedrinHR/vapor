
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
function obterHoraAtual() {
    const data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
  
  if(hora < 10){
    hora = "0" + hora
  }
  if(minutos < 10){
    minutos = "0" + minutos
  }
  if(segundos < 10){
    segundos = "0" + segundos
  }
  if(dia < 10 ){
    dia = "0" + dia
  }
  if(mes < 10){
    mes = "0" + mes
  }
    let dataAtual = dia + "/" + (mes+1) + "/" + ano + "-" + hora + ":" + ":" + minutos + ":" + segundos
  
    return dataAtual
  }
  let dataHora = obterHoraAtual()
  console.log(dataHora)