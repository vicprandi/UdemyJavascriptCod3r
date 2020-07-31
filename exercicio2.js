function triangulo (lado1, lado2, lado3) {
    if (lado1 === lado2 === lado3) {
        console.log('O triângulo é equilátero.')
    }

    else if (lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1) {
        console.log('O triângulo é isóceles.')
    }

    else if (lado1 != lado2 != lado3) {
        console.log('O triângulo é escaleno.')
    }
    
    
}

triangulo (3,4,5)
triangulo (5, 5, 10)
triangulo (5, 5, 5)