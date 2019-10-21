
const numero = prompt("Ingresa un numero")
let n = parseInt(numero,10)

function funcion(x){
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}


function catalan(x) { 
    return funcion(2 * x) / (funcion(x+1) * funcion(x))
}


for (let i = 0; i <n ; i++) {
    
    console.log(catalan(i))
    
}