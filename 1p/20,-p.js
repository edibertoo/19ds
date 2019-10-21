function factorial (n,r) {
	let total = 1; 
	for (i=1; i<=n; i++) {
        total = total * i; 
        
    }
    
    let suma = n - r
    
    let total2 = 1;
    for (i=1; i<=suma; i++) {
        total2 = total2 * i; 
    }

    let formula = total/total2

	return formula; 
}


console.log("Resultado: "+factorial(10,3))