
var Trie = function () {
    this.root = {};
    this.end = "$";
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let start = this.root;
    for (let c of word) {
        if (start.hasOwnProperty(c)) {
            start = start[c];
        } else {
            start[c] = {};
            start = start[c];
        }
    }
    start[this.end] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let start = this.root;
    for (let c of word) {
        if (start.hasOwnProperty(c)) {
            start = start[c];
        } else {
            return false;
        }
    }
    return !!start[this.end];
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let start = this.root;
    for (let c of prefix) {
        if (start && start.hasOwnProperty(c)) {
            start = start[c];
        } else {
            return false;
        }
    }
    return true;
};


let word = "hotdog";
let prefix = "dog";
var obj = new Trie()
obj.insert(word)
console.log(obj.search(word));
console.log(obj.startsWith(prefix));
