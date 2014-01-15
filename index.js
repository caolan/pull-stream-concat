var pull = require('pull-stream');


function concat(a, b) {
    var curr = a;
    return pull.Source(function () {
        return function next(end, cb) {
            if (end) {
                return cb(end);
            }
            return curr(null, function (end, data) {
                if (end && curr === a) {
                    curr = b;
                    return next(null, cb);
                }
                return cb(end, data);
            })
        }
    })();
};

module.exports = function () {
    return Array.prototype.slice.call(arguments).reduce(concat);
};
