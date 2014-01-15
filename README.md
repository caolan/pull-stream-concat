# pull-stream-concat

Concatenates multiple
[pull-streams](https://github.com/dominictarr/pull-stream), returning a new
pull-stream:

```javascript
var concat = require('pull-stream-concat');

var all = concat(
    pull.values([1,2]),
    pull.values([3,4]),
    pull.values([5])
);

all.pipe(pull.collect(function (err, xs) {
    // xs will be [1, 2, 3, 4, 5]
});
```
