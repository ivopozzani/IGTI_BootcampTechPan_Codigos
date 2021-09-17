const submit = document.querySelector('form')

function handleInterestRate () {
  const prest = document.querySelectorAll('table tr')
  const valor = Number(document.querySelector('#valor').value)
  const prazoI = Number(document.querySelector('#prazoI').value)
  const jurosI = Number(document.querySelector('#jurosI').value)
  const amort1 = 240
  const result = valor*((1 + jurosI)**prazoI)
  
const resultAmort = result/amort1

function tableFill () {
  if (u === 1) return resultAmort;
  if (u === 2) return "hi";
  if (u === 3) return "worked again";
}

 for (var i = 1; i <= 5; i++) {
  for (var u = 1; u <= 3; u++){
    prest[i].children[u].textContent = tableFill ()
    
  } }

  console.log(valor)
  console.log(prazoI)
  console.log(jurosI)

}

submit.addEventListener('submit', handleInterestRate)
//const prest = document.querySelectorAll('table tr')

//console.log(prest[1])