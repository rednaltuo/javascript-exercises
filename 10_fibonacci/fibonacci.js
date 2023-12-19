const fibonacci = function(desiredIndex, currentIndex = 0, currNumber = 0, prevNumber = 1) {
    if (desiredIndex < 0)
        return "OOPS";

    if (desiredIndex == currentIndex)
        return currNumber;

    return fibonacci(desiredIndex, currentIndex + 1, currNumber + prevNumber, currNumber);
};

// Do not edit below this line
module.exports = fibonacci;
