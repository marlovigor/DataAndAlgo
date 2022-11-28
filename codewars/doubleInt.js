function doubleInteger(i) {
  const double = i * 2;
  return double;
}

// console.log(doubleInteger(22));

function validatePIN(pin) {
  if (pin.length != 4 && pin.length != 6) {
    return false;
  } if( /[a-zA-Z]/.test(pin)){
    return false
  }
  else {
    console.log(pin)
    return true;
  }
}


console.log(validatePIN('1234'))