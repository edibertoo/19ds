let ord = function(arra) {
    let n = 0
    for (let i = 0; i < arra.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arra[i]===arra[j]){
                n+=1
            } 
        } 
    }  
console.log("Repetición: "+n)
}
console.log(ord([4,4,1,2,3,3,54]))