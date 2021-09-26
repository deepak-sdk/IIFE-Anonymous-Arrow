// a.   Print odd numbers in an array

const oddNumber = () => {
  let arr = [4, 8, 37, 43, 26, 95, 124, 45];
  let even_number = [];
  let odd_number = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even_number.push(arr[i]);
    } else {
      odd_number.push(arr[i]);
    }
  }
  document.getElementById("oddNumber_Array").innerHTML = arr;
  document.getElementById("oddNumber").innerHTML = odd_number;
  console.log(odd_number);
};
oddNumber();

// b.   Convert all the strings to title caps in a string array
let arrStrCaps = ["dEEpak", "gUVi", "CSK"];
document.getElementById("Title_caps_arr").innerHTML = arrStrCaps;
let capitalizee = () => {
  let capitalizeWord = [];
  for (let i = 0; i < arrStrCaps.length; i++) {
    let sepStr = arrStrCaps[i].split(" ");
    sepStr.forEach((e) => {
      capitalizeWord.push(
        e[0].toUpperCase() + e.slice(1, e.length).toLowerCase()
      );
    });
  }
  console.log(capitalizeWord);
  document.getElementById("Title_caps").innerHTML = capitalizeWord;
};
capitalizee();

// c.   Sum of all numbers in an array

let sumArray = () => {
  let arr = [130, 245, 533, 257];
  const result = (cur, sum) => cur + sum;
  document.getElementById("sumArray_Array").innerHTML = arr;
  document.getElementById("sumArray").innerHTML = arr.reduce(result, 0);
  console.log(arr.reduce(result, 0));
};
sumArray();

// d.   Return all the prime numbers in an array
let primeNumber = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  document.getElementById("primeNumber_Array").innerHTML = arr;
  arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  });
  console.log(arr);

  document.getElementById("primeNumber").innerHTML = arr;
};
primeNumber();

// e.   Return all the palindromes in an array
let palinArrr = ["pop", "EYE", "civic","cache"];
document.getElementById("Palindromes_arr").innerHTML = palinArrr;
let findPalindromee = function () {
  let x = [];
  let y = [];
  for (let i = 0; i < palinArrr.length; i++) {
    let allWord = palinArrr[i].split(" ").forEach((e) => {
      let lower = e.toLowerCase();
      x.push(lower);
      let reverse = lower.split("").reverse().join("");
      y.push(reverse);
    });
  }
  var z = x.filter(function (val) {
    return y.indexOf(val) !== -1;
  });
  console.log(z)
  document.getElementById("Palindromes").innerHTML = z;
};
findPalindromee();
