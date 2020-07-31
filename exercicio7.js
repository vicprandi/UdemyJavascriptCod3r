function bhaskara (ax2, bx, c) { 
    let delta = bx**2 - 4*ax2*c
        if (delta <= 0) {
            console.log('Delta é negativo.')
        } else {
            let valor1 = (-bx + Math.sqrt(delta)) / 2*ax2
            let valor2 = (-bx - Math.sqrt(delta)) / 2*ax2
            console.log(valor1 + ' e ' + valor2)
        }
}

bhaskara (3, -5, 12)
bhaskara (-3, -5, 12)