//testing
class Node {
    constructor(coord) {
        this.coord = coord;
        this.next = null;
    }
}
class Graph {
    constructor() {
        this.list = this.createGraph();
        this.length = this.list.length;
    }
    createGraph() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let coord = [i, j];
                let node = new Node(coord);
                board.push(node);
            }
        }
        return board;
    }
    addEdge(coord, edge) {
        let vertex = this.find(coord);
        while (vertex.next) {
            vertex = vertex.next
        }
        vertex.next = new Node(edge);
    }
    find(coord) {
        let index = coord[0] * 8 + coord[1];
        return this.list[index];
    }
    printGraph() {
        for (let i = 0; i < this.list.length; i++) {
            let string = "vertex [" + this.list[i].coord + "] -> ";
            let vertex = this.list[i].next;
            while (vertex) {
                string += "[ " + vertex.coord + " ] ";
                vertex = vertex.next;
            }
            string += "-> null"
            console.log(string);
        }
    }

    findIndex(coord) {
        return coord[0] * 8 + coord[1];
    }

}
function knightMoves(start, end) {
    const paths = [];
    const visited = new Set();
    const queue = [];
    queue.push([start, [start]]);
    const dist = new Array(graph.length).fill(Infinity);
    dist[graph.findIndex(start)] = 0;
    visited.add(start.toString);
    while (queue.length > 0) {
        let [vertex, path] = queue.shift();
        let edge = graph.find(vertex).next;
        if (vertex.toString() == end.toString()) {
            paths.push(path);
        }
        while (edge) {
            if (!visited.has(edge.coord.toString())) {
                queue.push([edge.coord, [...path, edge.coord]]);
            }
            edge = edge.next;
        }
        visited.add(vertex.toString());
    }
    console.log(`Fastest Routes from ${start} to ${end}`)
    paths.forEach(element => console.log(element));
}



function addMoves(graph) {
    for (let i = 0; i < graph.length; i++) {
        let vertex = graph.list[i];
        let moves = validMoves(vertex);
        addValidMoves(vertex, graph, moves);
    }
}

function addValidMoves(vertex, graph, moves) {
    for (let i = 0; i < moves.length; i++) {
        graph.addEdge(vertex.coord, moves[i]);
    }
}

function validMoves(vertex) {
    let coord = vertex.coord;
    let validMoves = [];
    for (let i = 0; i < knightPossibleMoves.length; i++) {
        let move = [coord[0] + knightPossibleMoves[i][0], coord[1] + knightPossibleMoves[i][1]];
        if ((move[0] >= 0 && move[0] <= 7) && (move[1] >= 0 && move[1] <= 7)) {
            validMoves.push(move);
        }
    }
    return validMoves;
}

let graph = new Graph();
const knightPossibleMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]];
addMoves(graph);
//graph.printGraph();

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [4, 3]);
