/*
Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function comprarCarro (nome) {
    switch (nome) {
    case 'hatch':
        console.log('Compra efetuada com sucesso.')
        break
    case 'sedans': case 'motocicleta': case 'caminhonete':
        console.log('Não prefere esse modelo?')
        break
    default:
        console.log('Esse modelo não está disponível. :( ')
        console.log('Nós temos Hatchs, Sedans, Motocicletas e caminhonetes.')
    }
}

comprarCarro('hatch')
console.log('')
comprarCarro('caminhonete')
console.log('')
comprarCarro('arroz')