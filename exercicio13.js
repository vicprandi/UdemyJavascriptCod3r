function exibirDia (numero){
    if (numero >= 1 && numero <= 7) {
            switch (numero) {
                case 1: case 7:
                    console.log('Fim de semana.')
                    break
                case 2: case 3: case 4: case 5: case 6:
                    console.log('Dia útil.')
                    break
                default:
                    console.log('Dia inválido.')
            }
    } else {
        console.log('Dia inválido.')
    }
}

exibirDia(1)
exibirDia(7)
exibirDia(5)
exibirDia(2)
exibirDia('Victoria') // Esse aqui é a tipagem fraca. //
exibirDia(10)
exibirDia(-1)
exibirDia(0)