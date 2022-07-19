// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {
    if (intervals.length === 1 ) return true;
    
    let starts =[], ends = [];
    intervals.forEach(i => (starts.push(i[0]), ends.push(i[1])));
    starts.sort((a,b)=> a-b);
    ends.sort((a,b)=> a-b);

    for (let i = 1; i < starts.length; i++) {
        const start = starts[i];
        if (start < ends[i-1]) return false;
    }
    return true;
};

module.exports = canAttendMeetings;
