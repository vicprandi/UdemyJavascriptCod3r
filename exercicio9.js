
function prova (nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida < 38) { 
        console.log('Você foi reprovado com nota ' + notaCorrigida);
    } else if (notaCorrigida >= 40) {
        console.log('Você foi aprovado com nota ' + notaCorrigida);
    }

}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - nota % 5)
    } else {
        return nota
    }
}

prova(32)
prova(38)
prova(83)
prova(100)