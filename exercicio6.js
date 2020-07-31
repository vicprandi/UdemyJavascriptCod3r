function simples (capital, juros, tempo) {
    let jsim = (capital * juros * tempo)*0.01
    console.log('O montante é: ' + jsim)
}

function composto (capital, juros, tempo) {
    let jcom = capital*((1 + juros*0.01)**tempo)
    console.log('O montante é: '+ jcom)
}

simples(1000, 2, 6)
composto(1000, 2, 6)