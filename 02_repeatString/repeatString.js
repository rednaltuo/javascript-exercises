const repeatString = function(str, times) {
    if (times < 0) 
        return 'ERROR';
    let repeatingStr = '';
    for (let i=0; i<times; i++) {
        repeatingStr += str;
    }
    return repeatingStr;
};

// Do not edit below this line
module.exports = repeatString;
