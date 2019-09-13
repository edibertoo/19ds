var c = 17;
var j = 2;
var numerosPrimos = [];


for (j=1; j<=c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}