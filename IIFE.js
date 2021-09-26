// Do the below programs in anonymous function & IIFE

// a.   Print odd numbers in an array

(function () {
  let arr = [1, 2, 3, 4, 56, 75, 6, 9];
  let even_number = [];
  let odd_number = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even_number.push(arr[i]);
    } else {
      odd_number.push(arr[i]);
    }
  }
  document.getElementById("id_01").innerHTML = arr;
  document.getElementById("id_02").innerHTML = odd_number;
  console.log(odd_number);
})();

// b.   Convert all the strings to title caps in a string array
let arrStr = ["dEEpak", "gUVi", "CSK"];
document.getElementById("title_caps_arr").innerHTML = arrStr;
let capitalize = function () {
  let capitalizeWord = [];
  for (let i = 0; i < arrStr.length; i++) {
    let sepStr = arrStr[i].split(" ");
    sepStr.forEach((e) => {
      capitalizeWord.push(
        e[0].toUpperCase() + e.slice(1, e.length).toLowerCase()
      );
    });
  }
  console.log(capitalizeWord);
  document.getElementById("title_caps").innerHTML = capitalizeWord;
};
capitalize();

// c.   Sum of all numbers in an array
let sum_arr = function () {
  let arr = [10, 20, 30, 70];
  const result = (cur, sum) => cur + sum;
  document.getElementById("id_03").innerHTML = arr;
  document.getElementById("id_04").innerHTML = arr.reduce(result, 0);
  console.log(arr.reduce(result, 0));
};
sum_arr();

// d.   Return all the prime numbers in an array
(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  document.getElementById("id_05").innerHTML = arr;
  arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  });
  console.log(arr);

  document.getElementById("id_06").innerHTML = arr;
})();

// e.   Return all the palindromes in an array

// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(palindrome("friendship"))

// let arrLen = allWord.length;
// let findPalin = (allWord) => {
//   let allPalin = [];
//   for (let i = 0; i < arrLen; i++) {
//     if (isPalin(allWord[i])) {
//       allPalin.push(allWord[i]);
//     }
//   }
//   return allPalin;
// };

// let isPalin = (word) => {
//   let wordIsPali = true;
//   let j = word.length - 1;
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] != word[j]) {
//       wordIsPali = false;
//     }
//     j--;
//   }
//   return wordIsPali;
// };

// console.log(findPalin())

// let WordArr = ["tech", "anna", "civic"];
// let LenArr = WordArr.length;

// let isPalin = (word) => {
//   let wordIsPalin = true;
//   let j = word.length - 1;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] != word[j]) {
//       wordIsPalin = false;
//     }
//     j--;
//   }
//   return wordIsPalin;
// };

// FindPalindrome = (WordArr) => {
//   if (this.item === undefined) {
//     return;
//   }
//   let OutputPalin = [];
//   for (let i = 0; i < LenArr; i++) {
//     if (isPalin(WordArr[i])) {
//       OutputPalin.push(WordArr[i]);
//     }
//   }
//   return OutputPalin;
// };
// console.log(FindPalindrome());

// let palinArr = ["tech", "anna", "civic"];
// let findPalindrome = function () {
//   let palindrome = [];
//   for (let i = 0; i < palinArr.length; i++) {
//     let allWord = palinArr[i].split(" ");
//     allWord.forEach((e) => {
//       let length = e.length;
//       for (let i = 0; (i < length / 2); i++) {
//         while(e[i] !== e[length-(i+1)]){
//           palindrome.push(e[i])
//         }
//         console.log(palindrome)
//       }
//     });
//   }
// };
// findPalindrome();

let palinArr = ["tech", "AnNa", "civic"]
document.getElementById("palindromes_arr").innerHTML = palinArr;
let findPalindrome = function () {
  let x = [];
  let y = [];
  for(let i=0; i<palinArr.length; i++){
    let allWord = palinArr[i].split(' ').forEach(e=>{
      let lower = e.toLowerCase();
      x.push(lower);
      let reverse = lower.split('').reverse().join('');
      y.push(reverse)
    })
  }
  var z = x.filter(function(val){
    return y.indexOf(val) !== -1;
  });
  console.log(z)
  document.getElementById("palindromes").innerHTML = z;
}
findPalindrome()

//  f.  Return median of two sorted arrays of same size

let getMedian = function (ar1, ar2, n) {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1,
    m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i === n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j === n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }
    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }
  return (m1 + m2) / 2;
};
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
document.getElementById("id_07").innerHTML = ar1;
document.getElementById("id_08").innerHTML = ar2;
document.getElementById("id_09").innerHTML = getMedian(ar1, ar2, n1);
if (n1 == n2) {
  console.log(getMedian(ar1, ar2, n1));
} else {
  console.log("Don't Work");
}

// g.    Remove duplicates from an array
let arr = [1, 2, 5, 2, 4, 4];
document.getElementById("id_10").innerHTML = arr;

let repeat = {};
let repeatedNum = function () {
  for (var index in arr) {
    var curvalue = arr[index];
    if (repeat[curvalue]) {
      repeat[curvalue] += 1;
    } else {
      repeat[curvalue] = 1;
    }
  }
  var repNum = [];
  for (key in repeat) {
    var repeatcount = repeat[key];
    if (repeatcount > 1) {
      repNum.push(key);
    }
  }
  console.log(repNum);
};
repeatedNum();

// h.   Rotate an array by k times

let arrayRotate = function (arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
};
for (let i = -6; i <= 6; i++) {
  // console.log(arrayRotate(["🧡","💚","💙","💜","🖤"], i), i);
  console.log(arrayRotate([1, 2, 3, 4, 5], i));
}
