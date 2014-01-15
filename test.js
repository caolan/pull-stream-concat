var concat = require('./index'),
    pull = require('pull-stream');


exports['concat two pull streams'] = function (test) {
    concat(pull.values([1,2]), pull.values([3,4]))
        .pipe(pull.collect(function (err, xs) {
            test.same(xs, [1,2,3,4]);
            test.done();
        }));
};

exports['concat many pull streams'] = function (test) {
    pull(
        concat(
            pull.values([]),
            pull.values([1,2,3]),
            pull.values([4,5]),
            pull.values([]),
            pull.values([6,7,8]),
            pull.values([9]),
            pull.values([])
        ),
        pull.collect(function (err, xs) {
            test.same(xs, [1,2,3,4,5,6,7,8,9]);
            test.done();
        })
    );
};
