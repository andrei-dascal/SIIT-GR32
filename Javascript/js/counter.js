var count = (function () {
    var counter = 0;

    return function () {
        counter += 1;
        return counter;
    };
})();

// count();
// count();