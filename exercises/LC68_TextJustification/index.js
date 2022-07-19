/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

    function justify(words, i, maxWidth, memo = []) {
        if (memo[i]) return memo[i];
        if (words.length === i) return { cost: 0, breaks: [] };
        if (words.length - 1 === i) return { cost: (maxWidth - words[i]) ^ 3, breaks: [i] };

        let cost = Infinity;
        let lineBreak = [];
        let costOfCurrentLine = words[i].length;
        for (let j = i + 1; j < words.length; j++) {
            let costij = (maxWidth - costOfCurrentLine) ^ 3
            if (costij < 0) break;

            let subCost = justify(words, j, maxWidth);

            let currentCost = costij + subCost.cost;
            lineBreak = currentCost < cost ? subCost.breaks : lineBreak;
            cost = Math.min(currentCost, cost);
            costOfCurrentLine = costOfCurrentLine + 1 + words[j].length;
        }

        return memo[i] = { cost, breaks: [i, ...lineBreak] };
    }

    let cost = justify(words, 0, maxWidth);
    let toPrint = "";
    let linebreaks = cost.breaks.reduce((acc, val)=> { acc[val] = true; return acc;},new Array(words.length));
    for (let i = 0; i < words.length; i++) {
        if (linebreaks[i] || i === (words.length - 1)) {
            console.log(toPrint);
            toPrint = words[i];
        } else{
            toPrint += " " + words[i];
        }
    }
};

fullJustify([
    'algodaily',
    'is',
    'awesome',
    'and',
    'you',
    'can',
    'text',
    'justify',
    'all',
    'types',
    'of',
    'text',
    'and',
    'words',
], 11);