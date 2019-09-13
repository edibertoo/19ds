let x = prompt("Ingresa un Numero")
let n = parseInt(x,10)
let formula = Math.exp(x)

console.log("Primera formula: "+formula)

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let formula2 = 0

for(let i = 0; i <= 9;i++){
    formula2+= Math.pow(n,i)/factorial(i)

}

console.log("Resdultado: "+formula2) 