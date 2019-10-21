let Orden = function(arra) {
    for (let i = 0; i < arra.length; i++) {
       
        for (let j = 0; j < i; j++) {
            
            if (arra[i]===arra[j]){
                
               return console.log("Numero repetido "+arra[i])
            } 
        } 
    }  
     return false
}
console.log(Orden([4,523,123,1,89,4]))