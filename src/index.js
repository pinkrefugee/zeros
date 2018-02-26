module.exports = function getZerosCount(number) {
  // your implementation
  var sum = 0;
  var n = Math.floor (Math.log(number) / Math.log(5));
  for (var i = 1; i <= n; i++)
  {
     sum = sum + Math.floor(number/(Math.pow(5,i)));
  }
  return sum;
}
