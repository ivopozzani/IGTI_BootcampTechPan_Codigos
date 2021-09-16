const submit = document.querySelector('form')

function handleInterestRate () {
  const valor = Number(document.querySelector('#valor').value)
  const prazoI = Number(document.querySelector('#prazoI').value)
  const jurosI = Number(document.querySelector('#jurosI').value)
  
  const result = valor*((1 + jurosI)**prazoI)
  
 
  console.log(result)
  console.log(valor)
  console.log(prazoI)
  console.log(jurosI)

}

submit.addEventListener('submit', handleInterestRate)