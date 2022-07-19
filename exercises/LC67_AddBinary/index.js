/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    if(a.length<b.length){
        [a,b] = [b,a];
    }
    let res = Array(a.length);
    
    let i = a.length-1;
    let j = b.length-1;
    let rem = 0;
    while(i>=0) {
        let sum = (+a[i]) + rem +  (j >= 0 ? (+b[j]) : 0);
        rem = 0;
        if(sum >= 2) {
            rem = 1;
            sum -=2;
        } 
        res[i] = sum;
        i--;
        j--;
    }
    
    
    res = res.join('');
    return rem ? rem + res : res;
};

addBinary('11', "1");