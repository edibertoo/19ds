let loops = 0
let k = 0
let temp = 0
let form2
let formula = 0

for (let i = 1; i <= loops; i++) {
    temp+= Math.pow(i, k)
}

formula = k + 1

form2 = ((1 / formula) * (Math.pow(loops, formula)))

console.log('Sumatoria: '+ temp)
console.log('Formula: '+ form2)