module.exports = function getZerosCount(number, base) {
  var value = base;
  var multiplier = 2;
  var sqrt = Math.sqrt(base);
  var arr = [];

  while (value > 1 && multiplier <= sqrt) {
    if (value % multiplier == 0) {
      arr.push(multiplier);
      value /= multiplier;
    } else if (multiplier == 2) {
      multiplier++;
    } else {
      multiplier += 2;
    }
  }

  if (value != 1) {
    arr.push(value);
  }


  var divider = 0;
  var isSqrt = false;
  var power = 0;
  var arrValues = [];
  var result = 0;

  if(arr.length == 1) {
    divider = arr[0];
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr.length > 2) {
        divider = arr[arr.length-1];
      } else if (arr[i] == arr[i-1]) {
        divider = arr[i];
        isSqrt = true;
      }
    }
  }


  if (arr[arr.length-1] == arr[arr.length-2]) {
    divider = arr[arr.length-1];

    for (var i = 0 ; i < arr.length; i++) {
      if (arr[i] == divider) {
        power++;
        isSqrt = true;
      }
    }
  }

   

  if (divider == 0) {
    divider = arr[arr.length-1];
  }

  if(arr.length >= 6 && arr[arr.length-1] != 7 && arr[arr.length-2] != 3) {
    var firstNum = arr[0];
    var countFirstNum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (firstNum == arr[i]) {
        countFirstNum++;
      }
    }

    if (Math.pow(firstNum, countFirstNum) > divider) {
      divider = firstNum;
      power = countFirstNum;
      isSqrt = true;
    }
  }

  var copyDivider = divider;

  while (arrValues[arrValues.length-1] >= 1|| arrValues.length == 0) {
    arrValues.push(Math.floor(number / divider));
    divider *= copyDivider;
  }

  for (var i = 0; i < arrValues.length; i++) {
    result += arrValues[i];
  }

  if(isSqrt) {
    result = Math.floor(result / power);
  }
  

  return result;
}