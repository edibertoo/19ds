class Matrix {
    constructor(filas, columnas) {
      this.filas = filas;
      this.columnas = columnas;
      this.data = this.init();
    }
  
    
    init() {
      const temp = [];
  
      for (let i = 0; i < this.filas; i++) {
        temp[i] = new Array(this.columnas);
  
        for (let j = 0; j < this.columnas; j++) {
          temp[i][j] = 0;
        }
      }
  
      return temp;
    }
  

    initRandom() {
      for (let i = 0; i < this.filas; i++) {
        this.data[i] = new Array(this.columnas);
  
        for (let j = 0; j < this.columnas; j++) {
          this.data[i][j] = (Math.round (Math.random () * 10));
        }
      }
  
      return this.data;
    }
  

    getRow(r) {
      
  
      return this.data[r];
    }

  
    getColumn(c) {
      const temp = [];
  
      
  
      for (let i = 0; i < this.filas; i++) {
        temp.push(this.data[i][c]);
      }
  
      return temp;
    }
  

    isSquared() {
      if (this.columnas === this.filas) {
        return true;
      }
  
      return false;
    }
  

    isSymmetric() {
      this.isSquared();
  
      for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
          if (this.data[i][j] != this.data[j][i]) {
            return false;
          }
        }
      }
  
      return true;
    }
  

    isIdentity() {
      this.isSymmetric();
  
      for (let i = 0; i < this.filas; i++) {
        if (this.data[i][i] !== 1) {
          return false;
        }
      }
  
      return true;
    }
  

    getMatrix() {
      return this.data;
    }
  }


  (function UseMatri(){
    NewMatrix = new Matrix(3,3)

    console.log(NewMatrix.init())
    console.log(NewMatrix.initRandom())
    console.log(NewMatrix.isSquared())
    console.log(NewMatrix.isSymmetric())
    console.log(NewMatrix.isIdentity())

  })()