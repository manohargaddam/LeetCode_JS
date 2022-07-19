
class Graph {
    constructor(v) {
        this.v = v;
        this.adj = Array(v).fill(true).map(v => []);
    }

    addEdge(u, v) {
        this.adj[u].push(v);
    }

    topologicalSortBFS() {
        let indegree = Array(this.v).fill(0);

        for (let edges of this.adj) {
            for (let edge of edges) {
                indegree[edge]++;
            }
        }

        let q = [];
        for (let v in indegree) {
            if (indegree[v] === 0) {
                q.push(v);
            }
        }


        let result = [];
        while (q.length) {
            let v = q.shift();
            result.push(v);

            for (let adj of this.adj[v]) {
                if (--indegree[adj] === 0) {
                    q.push(adj);
                }
            }
        }

        return result;
    }

    //return result if no cycle, false if there is cycle
    topologicalSortDFS() {
        let visited = {};
        let result = [];
        let self = this;
        for (let v in this.adj) {
            if (!visited[v]) {
                if (!visitDFS(v, visited, result)) return false;
            }
        }

        function visitDFS(v, visited, result, visiting = {}) {
            if (visiting[v]) return false;
            if (visited[v]) return true;

            visiting[v] = true;
            for (let adjv of self.adj[v]) {
                if (!visitDFS(adjv, visited, result, visiting)) return false;
            }
            visiting[v] = false;
            visited[v] = true;
            result.push(v);
            return true;
        }

        return result;
    }

    hasCycle() {
        return this.topologicalSortBFS().length !== this.v;
    }
}

let g = new Graph(5);
g.addEdge(0, 2);
g.addEdge(0, 1);
g.addEdge(2, 3);
g.addEdge(1, 3);
g.addEdge(3, 4);
// g.addEdge(4, 1);

console.log(g.topologicalSortBFS());
console.log(g.topologicalSortDFS());


// graph structre
//     2
// 0       3   4
//     1