function lanchonete (codigo, quantidade) {
    console.log('Faça um pedido! \n')
    let valor = 0
    switch (codigo) {
        case 1:
            valor = quantidade*3
            console.log('Você pagará ' + valor + 'reais.')
            break
        case 2:
            valor = quantidade*4
            console.log('Você pagará' + valor + ' reais.')
            break
        case 3:
            valor = quantidade*5.5
            console.log('Você pagará' + valor + ' reais.')
            break
        case 4:
            valor = quantidade*7.5
            console.log('Você pagará' + valor + ' reais.')
            break
        case 5: 
            valor = quantidade*3.5
            console.log('Você pagará' + valor + ' reais.')
            break
        case 6: 
            valor = quantidade*2.8
            console.log('Você pagará' + valor + ' reais.')
            break
        default:
            console.log('Insira um código correto.')

    }
}

lanchonete(1, 2)
lanchonete(2, 2)
lanchonete(3, 2)
lanchonete(4, 2)
lanchonete(5, 2)
lanchonete(6, 2)
lanchonete(7, 2)