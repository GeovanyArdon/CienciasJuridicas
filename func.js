// Clase para representar un Nodo en un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Clase para representar un Árbol Binario de Búsqueda (BST)
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Función para insertar un nuevo valor en el árbol
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Función recursiva para insertar un nuevo nodo en el lugar adecuado
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Función para realizar un recorrido en inorden (in-order traversal)
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // Función para buscar un valor en el árbol
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }
}

// Clase para representar una Lista Enlazada (Linked List)
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Función para agregar un nuevo valor al final de la lista
    append(value) {
        const newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Función para recorrer la lista y ejecutar un callback en cada nodo
    traverse(callback) {
        let current = this.head;
        while (current !== null) {
            callback(current.value);
            current = current.next;
        }
    }
}

// Función para realizar una solicitud HTTP GET utilizando Fetch API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Función para crear un elemento DOM y agregarlo al cuerpo del documento
function createElement(tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;
    document.body.appendChild(element);
}

// Función para manejar un formulario y mostrar los datos ingresados
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (const [name, value] of formData.entries()) {
        createElement('p', `${name}: ${value}`);
    }
}

// Función para inicializar un evento de escucha en un formulario
function initFormListener(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Función principal para ejecutar diversas operaciones
async function main() {
    // Inicializar un árbol binario de búsqueda
    const bst = new BinarySearchTree();
    bst.insert(15);
    bst.insert(25);
    bst.insert(10);
    bst.insert(7);
    bst.insert(22);
    bst.insert(17);
    bst.insert(13);

    console.log('In-order Traversal:');
    bst.inOrderTraverse(value => console.log(value));

    console.log('Search 22:', bst.search(22));
    console.log('Search 5:', bst.search(5));

    // Inicializar una lista enlazada
    const list = new LinkedList();
    list.append('Node 1');
    list.append('Node 2');
    list.append('Node 3');

    console.log('Linked List:');
    list.traverse(value => console.log(value));

    // Realizar una solicitud HTTP GET
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const data = await fetchData(apiUrl);
    console.log('Fetched Data:', data);

    // Inicializar evento de formulario
    initFormListener('exampleForm');
}

// Ejecutar la función principal
main();
