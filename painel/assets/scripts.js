
// function removeErrorMessage() {
//     const errorMessage = document.getElementById("error-message")

//     if(errorMessage != null) {
//         errorMessage.remove()
//     }
// }


function excluirJogo(idJogo) {

  const excluirJogo = confirm("realmente deseja excluir esse jogo?")

  if (excluirJogo == true) {
    window.open("excluir-jogo.php?id=" + idJogo, "_SELF")
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
  let mes = data.getMonth() + 1
  let ano = data.getFullYear()

  if (hora < 10) {
    hora = "0" + hora
  }
  if (minutos < 10) {
    minutos = "0" + minutos
  }
  if (segundos < 10) {
    segundos = "0" + segundos
  }
  if (dia < 10) {
    dia = "0" + dia
  }
  if (mes < 10) {
    mes = "0" + mes
  }
  let dataAtual = dia + "/" + (mes) + "/" + ano + "-" + hora + ":" + minutos + ":" + segundos

  return dataAtual
}
let dataHora = obterHoraAtual()
console.log(dataHora)

function updateClock() {
  const clock = document.getElementById('hora')

  clock.innerHTML = obterHoraAtual()

  setInterval(function () {
    hora.innerHTML = obterHoraAtual()
  })
}

// function cor_aleatoria() {
//   const r = Math.floor(Math.random() * 256)
//   const g = Math.floor(Math.random() * 256)
//   const b = Math.floor(Math.random() * 256)
//   const cor = "rgb(" + r + "," + g + "," + b + ")"

//   document.getElementById("nomesite").style.color = cor
//   document.getElementById("nomeadm").style.color = cor
// }

function iniciar_mudanca_de_cor() {
  setInterval(cor_aleatoria, 1000)
}
function transformar_texto_maiusculo(elemento){
  let valor_que_usuario_digitou = elemento.value



  elemento.value = (valor_que_usuario_digitou.toUpperCase())
}
