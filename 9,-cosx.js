function factorial(n){
    let r = 1
    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 
    return r
}


function opera(i){
  if (i % 2 === 0) return -1;
  else return 1;
};


function cos(x){
  let suma = 1
  let limite = 15

  for (let i = 2, j = 2; j <= limite; i += 2, j++) {
    suma += opera(j) * (Math.pow(x, i) / factorial(i));
  }
  return suma;
};

console.log(cos(7))