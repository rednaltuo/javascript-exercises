const palindromes = function (str) {
    str = str.replace(/\W/g, '').toLowerCase();

    return str === str.split('').reverse().join('');
    
    // for (let i = 0; i < str.length; i++) {
    //     if (str.at(i) !== str.at(-i - 1))
    //         return false;
    // }
    // return true;
};

// Do not edit below this line
module.exports = palindromes;
