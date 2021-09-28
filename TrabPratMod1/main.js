const button = document.querySelector('#button')

function handleInterestRate () {
  // --------- Seletores ------------------//
  const tableRow = document.querySelectorAll('table tr')
  const results = document.querySelectorAll('.results input')
  const valorI = document.querySelector('#valor').valueAsNumber
  const prazoI = document.querySelector('#prazoI').valueAsNumber
  const jurosI = document.querySelector('#jurosI').valueAsNumber

  // Prazo(meses) - Juros ao mês - Juros acumulados //
  const prazoF = prazoI*12
  const jurosF = ((1+jurosI)**(1/12)) - 1  
  let jurosAcumulados = 0;

  //Calculo Juros acumulados//
  for (var p = 0; p <= prazoF; p++){
    const amorti = valorI/prazoF
    const sDevedor = (valorI)-(p*amorti)
    const jurosMes = sDevedor*jurosF
    jurosAcumulados = jurosAcumulados + jurosMes
  }  

  //------Tabela[ Amortização - Juros - Total ]-----------//  
  function tableFill () {
    const rAmortiza = valorI/prazoF
    const sDevedor = (valorI)-((i-1)*rAmortiza)
    const jurosTabela = sDevedor*jurosF
    const total = rAmortiza+jurosTabela

    if (u === 1) return rAmortiza.toFixed(2);
    if (u === 2) return jurosTabela.toFixed(2);
    if (u === 3) return total.toFixed(2);    
  }

  // Construção da tabela //
  for (var i = 1; i <= 5; i++) {
    for (var u = 1; u <= 3; u++){
      tableRow[i].children[u].textContent = tableFill ()      
  } }

  //Impressão resultados na tela //
  results[0].value = prazoF
  results[1].value = Number(jurosF.toFixed(4))
  results[2].value = Number(jurosAcumulados.toFixed(2))
  return;
}

button.addEventListener('click', handleInterestRate)