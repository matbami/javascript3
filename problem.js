replace = number => {
  array = [];
  for (let i = 1; i <= number; i++) {
    //if number is divisible by 2 replace with yu
    if (i % 2 == 0) {
      var a = "yu";
    }

    //if number is divisible by 3 replace with gi
    if (i % 3 == 0) {
      var b = "gi";
    }
    //if number is divisible by 5 replace with oh
    if (i % 5 == 0) {
      var c = "oh";
    } else {
      var d = i;
    }

    //if number is divisile by 2 only
    if (i % 2 == 0 && i % 3 != 0 && i % 5 != 0) {
      array.push(a);
    }
    //if number is divisile by 3 only
    if (i % 2 != 0 && i % 3 == 0 && i % 5 != 0) {
      array.push(b);
    }
    //if number is divisile by 5 only
    if (i % 2 != 0 && i % 3 != 0 && i % 5 == 0) {
      array.push(c);
    }
    //if number is divisile by 2 , 3 and 5
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      array.push(a + "-" + b + "-" + c);
    }
    //if number is divisile by 2 and 3 only
    if (i % 2 == 0 && i % 3 == 0 && i % 5 != 0) {
      array.push(a + "-" + b);
    }
    //if number is divisile by 2 and 5 only
    if (i % 2 == 0 && i % 3 != 0 && i % 5 == 0) {
      array.push(a + "-" + c);
    }
    //if number is divisile by 3 and 5 only
    if (i % 2 != 0 && i % 3 == 0 && i % 5 == 0) {
      array.push(b + "-" + c);
    }
    //if number is divisile by none
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
      array.push(d);
    }
  }
  console.log(array);
};

replace(100);
replace(23);
