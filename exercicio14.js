function nomeDaFruta (nome) {
    switch (nome) {
        case 'maçã':
            console.log('Não vendemos essa fruta.')
            break
        case 'kiwi':
            console.log('Não temos kiwi.')
            break
        case 'melancia': 
            console.log('Três reais o kg.')
            break
        default:
            console.log('Uma fruta válida, por favor.')
    }
}

nomeDaFruta('maçã')
nomeDaFruta('kiwi')
nomeDaFruta('melancia')
nomeDaFruta('alcatra')