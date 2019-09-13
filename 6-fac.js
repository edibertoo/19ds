let n = 2
let temp = 0
let formula

for (let i = 1; i <= n; i++) {
    temp+= i * i
}

formula = (n*(n+1)*(2*n+1))/ 6

console.log('Suma: '+ temp)
console.log('Formula: '+ formula)