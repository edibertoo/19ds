class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeUBB {
  constructor(node) {
    this.node = node;
  }

  insert(n, node = this.node) {
      if (node.left==null) {
        node.left = n;
        return node;
      } else if (node.right==null) {
        node.right = n;
        return node;
      } else if (node.right!=null && node.left.right==null) {
        return this.insert(n, node.left);
      } else if (node.left!=null && node.right.left==null) {
        return this.insert(n, node.right);
      } else if (node.right!=null && node.right.right==null) {
        return this.insert(n, node.right);
      } else {
        return this.insert(n, node.left);
      }
    }

  remove(remove, node=this.node) {
    if (node==null) {
      return null;
    }
    if (node.left.data==remove) {
      node.left = null;
      return node;
    } else if (node.right.data==remove) {
      node.right = null;
      return node;
    } else if (node.right!=null && node.left.right==null){
      return this.remove(remove, node.left);
    } else if (node.left!=null && node.right.left==null){
      return this.remove(remove, node.right);
    } else if (node.right!=null && node.right.right==null){
      return this.remove(remove, node.right);
    } else {
      return this.remove(remove, node.left);
    }
  }

  bft(node = this.node) {
    let queue = [];
    let print = [];

    queue.push(node);

    while (queue.length) {
      let nodeTemp = queue.shift();

      print.push(nodeTemp.data);

      if (nodeTemp.left) {
        queue.push(nodeTemp.left);
      }

      if (nodeTemp.right) {
        queue.push(nodeTemp.right);
      }
    }

    return print;
  }

  preOrder(node = this.node) {
    console.log(node.data);

    if (node.left) {
      this.preOrder(node.left);
    }

    if (node.right) {
      this.preOrder(node.right);
    }
  }
}
//Creacion del nodo root
let root = new Node(2);
//Nodos del tree
let child1 = new Node(4);
let child2 = new Node(8);
let child3 = new Node(3);
let child4 = new Node(5);
let child5 = new Node(6);
let child6 = new Node(7);

let GH = new TreeUBB(root);
//Insercion de nodos
GH.insert(child1);
GH.insert(child2);
GH.insert(child3);
GH.insert(child4);
GH.insert(child5);
GH.insert(child6);


//Recorrido BFT
console.log(GH.bft());
console.log('');

//Recorrido PreOrder
GH.preOrder();
console.log('');

//Metodo Remove
GH.remove(7);
console.log('');

//Verificacion
GH.preOrder();