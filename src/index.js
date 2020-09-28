
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) { // проверка, что это массив и в нем что-то есть
    let minimum = Math.min.apply(null, array);
    return minimum;
  } else return 0;  
};

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    let maximum = Math.max.apply(null, array);
    return maximum;
  } else return 0;
};

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let average = 0;
    let sum = 0;
    for (i = 0; i < array.length; ++i) {
      if (typeof array[i] === 'number') {
        sum = sum + array[i];
      };    
    };
    average = sum / array.length;
    return average;
  } else return 0;
};
