
exports.min = function min (array) {
  if (array.length !== 0) {
    let minimum = Math.min.apply(null, array);
    return minimum;
  } else return 0;  
}

exports.max = function max (array) {
  let maximum = Math.max.apply(null, array);
  return maximum;
}

exports.avg = function avg (array) {
  let average = 0;
  let sum = 0;
  for (i = 0; i < array.length; ++i) {
    if (typeof array[i] === 'number') {
      sum = sum + array[i];
    };    
  };
  average = sum / array.length;
  return average;
}
