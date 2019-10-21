class factorial {
    constructor(num){
      this.num = num
    }
    
    getValue(num=this.num) { 
      function value(num){
      return num<=1 ? 1:  num*value(num-1)
      }
      return value(num);
    }
  
    getCost(num=this.num) {
         let cont=0;
         function value(num){
          if(num <=1){
            cont++;
            return num;
          } else{
            cont++;
            return num*value(num-1);
          }
         }
         value(num);
         return cont;
    }
    
    getSuccesion() {
        for (let i = 1; i <= this.num; i++) {
          console.log("Factorial de " + i + " es: " + this.getValue(i) );
        }
      }
    
      getTable() {
        console.log("N - Cost - Value")
        for (let i = 0; i <= this.num; i++) {
          console.log('f(' + i + ') - ' + this.getCost(i) + ' - ' + this.getValue(i));
        }
    }
  }
  ( function usefactorial() {
    ele = new factorial(5)
    console.log(ele.getTable())
    console.log(ele.getSuccesion())
  })()