var browserify = require('browserify');

var entries = 'a b c d e f g h i j k'.split(' ');
var bundle = browserify({
  entries: entries.map(function(v) { return './' + v + '.js' }),
  watch: false,
  cache: false,
  debug: false
});

entries.forEach(function(entry) {
  bundle.require('./' + entry + '.js', { expose: entry });
});

bundle.bundle({}, function(err, src) {
  if (err) throw err;
  console.log(src);
});
