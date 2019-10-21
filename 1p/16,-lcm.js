// O(f(n))

let a = 21
let b = 7

// Maximo Comun Divisor
function gcd (n, m) {
    let temp = 0
    
    if(n||m)
    {
    while (n % m != 0) {
        temp = n % m
        n = m
        m = temp
    }
    return m
}
 }

// Minimo Comun Multiplo
if(n||m)
{
function lsd (n, m) {
    return ( n * m / gcd(n, m))
 
   }
}
console.log("El minimo comun multiplo es: ", lsd(a, b))