const leapYears = function(year) {
    return year%4 == 0 && (year%100 != 0 || year%400 == 0);
    // if (year%4)
    //     return false;
    // if (year%100 == 0 && year%400)
    //     return false;
    // return true;
};

// Do not edit below this line
module.exports = leapYears;
