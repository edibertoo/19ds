class Vector {
    constructor(data) {
      this.data = data;
    }
    sum(vector) {
      return this.data.map((item, i) => item + vector[i]);
    }
    subt(vector) {
      return this.data.map((item, i) => item - vector[i]);
    }
    mul(vector) {
      return this.data.map((item, i) => item * vector[i]);
    }
    getVector() {
      return this.data;
    }
}

( function useVector () {
   a = [2, 3, 4, 5, 6, 7];
  
   b = [3, 2, 1, 5, 8, 1];
    
  const vector = new Vector(a);
  
  console.log("suma: " +vector.sum(b));
      
  console.log("Subt: " + vector.subt(b));
  
  console.log("Multiplicar: " + vector.mul(b));
    
  console.log("GetVector: " + vector.getVector());
})()