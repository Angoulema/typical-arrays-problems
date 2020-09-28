
exports.min = function min (array) {
  let min = 0;
  for (i = 0; i < array.length; ++i) {
    if (array[i] < min) {
      min = array[i];
    };
  };
  return min;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
