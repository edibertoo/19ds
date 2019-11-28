class Node{
    constructor(value){
        this.value = value
        this.ligas = [];
    }
}


class Graph {
    constructor(){
        this.nodes = []
        this.nodevalues = []
        this.ligas = []
        this.multi = false
        this.cantligas = 0;
    }

    addVertex(nodo){
        this.nodes.push(nodo);
        this.nodevalues.push(nodo.value);
    }

    addEdge(nodo1,nodo2,dobleliga){
        if(dobleliga){

            this.multi = true;
            this.cantligas + 1;
            nodo1.ligas.push(nodo2.value)
            this.ligas.push(nodo1.value + ' -> ' + nodo2.value)
            
            nodo2.ligas.push(nodo1.value)
            this.ligas.push(nodo2.value + ' -> ' + nodo1.value)

        }else{
            this.cantligas + 1;
            nodo1.ligas.push(nodo2.value)
            this.ligas.push(nodo1.value + ' -> ' + nodo2.value)
        }
    }

    printgraph(){
        console.log("--GRAFO--")
        let i = 0;
        while(this.nodes.length > i){
        console.log(this.nodes[i].value +": " + this.nodes[i].ligas + '\n')
        i++
        }
    }

    iscomplete(){
    //check that number of edges in the graph is n(n-1)/2
    if(this.ligas.length === (this.ligas.length * (this.ligas.length - 1))/2 ){ return true}
    else{return false}
    }

    issubgraph(grafo2){
        if(this.nodes.length > grafo2.nodes.length){
            return false;
        }
        if(this.nodevalues.some(v => grafo2.nodevalues.some.includes(v))){
            return true
        }

    }

    isMultigraph(){

        return this.multi

    }

}

//crear un grafo
let grafo1 = new Graph();

//cear los nodos
let nodo1 = new Node(1)
grafo1.addVertex(nodo1)
let nodo2 = new Node(2)
grafo1.addVertex(nodo2)
let nodo3 = new Node(3)
grafo1.addVertex(nodo3)
let nodo4 = new Node(4)
grafo1.addVertex(nodo4)

//añadir las ligas
grafo1.addEdge(nodo1,nodo2);
grafo1.addEdge(nodo2,nodo3);
grafo1.addEdge(nodo3,nodo4);
grafo1.addEdge(nodo4,nodo1);

//print graph
console.log(grafo1.printgraph())

//is complete
console.log(grafo1.iscomplete())


//crear otro grafo
let grafo2 = new Graph();

let nodo11 = new Node(1)
grafo1.addVertex(nodo1)
let nodo22 = new Node(2)
grafo1.addVertex(nodo2)
let nodo33 = new Node(3)
grafo1.addVertex(nodo3)

//añadir las ligas
grafo1.addEdge(nodo11,nodo22,true);
grafo1.addEdge(nodo22,nodo33);
grafo1.addEdge(nodo33,nodo11);