/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let hashVisited = {};
    let hashPre = {};
    let canFinish = {};

    for (let pre of prerequisites) {
        hashPre[pre[0]] = hashPre[pre[0]] || [];
        hashPre[pre[0]].push(pre[1]);
    }

    // visit all courses
    // for (let i = 0; i < numCourses; i++) {
    //     hashVisited = {};
    //     if(!canFinishCourse(i, hashVisited, hashPre, canFinish)) return false;
    // }

    // visit by all prereq
    for (let i = 0; i < prerequisites.length; i++) {
        hashVisited = {};
        if (!canFinishCourse(prerequisites[i][0], hashVisited, hashPre, canFinish)) return false;
    }

    function canFinishCourse(course, hashVisited, hashPre, canFinish) {
        if (canFinish[course] === true || canFinish[course] === false) return canFinish[course];
        if (hashVisited[course]) return false;

        hashVisited[course] = true;
        let ispossible = true;
        if (hashPre[course]) {
            ispossible = hashPre[course].every(pre => canFinishCourse(pre, hashVisited, hashPre, canFinish));
        }
        return canFinish[course] = ispossible;
    }

    return true;
};


const canFinish1 = function (numCourses, prerequisites) {
    let graph = Array(numCourses).fill(true).map(v => []);
    for (let pre of prerequisites) {
        graph[pre[1]].push(pre[0]);
    }

    // return false if there is cycle else true
    function cycleExists(graph, i, visited, visiting) {
        if (visiting[i]) return true;
        if (visited[i]) return false;

        visiting[i] = true;
        for (let edge of graph[i]) {
            if (!visited[edge]) {
                if (cycleExists(graph, edge, visited, visiting)) return true;
            }
        }

        visiting[i] = false;
        visited[i] = true;

        return false;
    }

    let visited = {};
    for (let i = 0; i < numCourses; i++) {
        let visiting = {};
        if (!visited[i]) {
            if (cycleExists(graph, i, visited, visiting)) return false;
        }
    }

    return true;
}


console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]));
console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]]));

console.log(canFinish1(2, [[1, 0]]));
console.log(canFinish1(2, [[1, 0], [0, 1]]));
console.log(canFinish1(5, [[1, 4], [2, 4], [3, 1], [3, 2]]));
console.log(canFinish1(3, [[0, 1], [0, 2], [1, 2]]));