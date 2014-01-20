# pull-stream-concat

**WARNING:** After writing this, I found
[pull-cat](https://github.com/dominictarr/pull-cat) which does the same
thing (but handles the case where the first stream errors properly). I'll
be using that library and I suggest you do the same. This code is left here
to warn others searching npm for the same thing and for people curious to
see a slighty different approach to the same code.


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
