let ord = function(arra) {
    let x = 0
    for (let i = 0; i < arra.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arra[i]===arra[j]){
                console.log("Numeros Repetidos: "+ arra[i])
            } 
        } 
    }  

}
console.log(ord([30,23,30,2,4]))