function salarioNovo (plano, salario) {
    switch(plano) {
        case 'a':
            salario = salario + salario*0.1
            console.log('Seu novo salário é: ' + salario)
            break
        case 'b':
            salario = salario + salario*0.15
            console.log('Seu novo salário é: ' + salario)
            break
        case 'c': 
            salario = salario + salario*0.2
            console.log('Seu novo salário é: ' + salario)
            break
        default:
            console.log('Plano inválido. Escolha entre A, B e C.')

    }
}

salarioNovo('a', 1000)
salarioNovo('b', 1000)
salarioNovo('c', 1000)