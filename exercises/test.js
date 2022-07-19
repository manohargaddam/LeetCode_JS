function rebalancingInvestments(streams, inventments) {
    let numOfStreams = streams.length;
    let investmentPerStream = inventments / numOfStreams;
    let fivePercent = investmentPerStream * 0.05;
    streams.forEach(s => s.amount = investmentPerStream);

    while (true) {
        console.log('-------------');
        telecastAd(streams, investmentPerStream);
        // if none of the streams can be telecated exit program
        if (streams.every(stream => stream.amount < stream.cost)) return;
        // if every stream is less than 5% no rebalance
        if (streams.every(stream => stream.amount <= fivePercent)) continue;
        // if every stream greater than 5% no rebalance
        if (streams.every(stream => stream.amount > fivePercent)) continue;

        // some are less than  5 and and some are more than five
        const totalAmountLeft = getTotalAmountLeft(streams);
        const rebalancedInvestmentPerStream = totalAmountLeft / numOfStreams;
        streams.forEach(s => s.amount = rebalancedInvestmentPerStream);
        console.log('Rebalanced streams');
    }
}

function telecastAd(streams) {
    streams.forEach(stream => {
        // telecast only if the amount is grater than ad cost
        if (stream.amount >= stream.cost) {
            stream.amount = stream.amount - stream.cost;
            console.log(`Telecasted Ad in stream: ${stream.type}. Balance: ${stream.amount}`);
        } else {
            console.log(`Insufficient balance stream: ${stream.type}, Balance: ${stream.amount}`);
        }
    });
}

function getTotalAmountLeft(streams) {
    return streams.reduce((total, stream) => total + stream.amount, 0);
}


// driver code
const streams = [
    {
        type: 'tv',
        cost: 20
    }, {
        type: 'ott',
        cost: 10,
    },
    {
        type: 'fm',
        cost: 5
    }
]
const investmentRecieved = 300;

rebalancingInvestments(streams, investmentRecieved);