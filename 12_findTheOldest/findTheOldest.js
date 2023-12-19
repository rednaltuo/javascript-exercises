const findTheOldest = function(people) {
    let currentYear = (new Date).getFullYear();

    // reduce solution
    return people.reduce((oldestP, currentP) => {
        let currentPAge =  (currentP.yearOfDeath ?? currentYear) - currentP.yearOfBirth;
        let oldestPAge = (oldestP.yearOfDeath ?? currentYear) - (oldestP.yearOfBirth ?? currentYear);
        return currentPAge > oldestPAge ? currentP : oldestP;
    }, {});

    // sort and pop solution
    // return people.sort((p1, p2) => 
    //     ((p1.yearOfDeath ?? currentYear) - p1.yearOfBirth) - ((p2.yearOfDeath ?? currentYear) - p2.yearOfBirth)
    // ).pop();
};

// Do not edit below this line
module.exports = findTheOldest;
