//! 2. Add Two Numbers

// var addTwoNumbers = function (l1, l2) {
//   //   console.log(l1.toString().split(",").reverse().join(""));
//   let res =
//     +l1?.toString().split(",").reverse().join("") +
//     +l2?.toString().split(",").reverse().join("");
// //   console.log(res);
//   //   let res = +l1.reverse().join("") + +l2.reverse().join("");
//     console.log(res.toString().split("").reverse().map(Number));
// };

// addTwoNumbers([2, 4, 3], [5, 6, 4]);

//? --------------------------------------------------------------------------------------------

//! 21. Merge Two Sorted Lists

// var mergeTwoLists = function (list1, list2) {
//   let arrs = [...list1, ...list2].sort((a, b) => a - b);
//   console.log(arrs);
// };

// mergeTwoLists([1, 2, 4], [1, 3, 4]);

//? --------------------------------------------------------------------------------------------

//! 35. Search Insert Position

// var searchInsert = function (nums, target) {
//   if (nums.indexOf(target) !== -1) {
//     return nums.indexOf(target);
//   } else {
//     nums.push(target);
//     return nums.sort((a, b) => a - b).indexOf(target);
//   }
// };

// console.log(searchInsert([1, 3, 5, 6], 7));

//? --------------------------------------------------------------------------------------------

//! 43. Multiply Strings

// var multiply = function (num1, num2) {
//   const bigInt1 = BigInt(num1);
//   const bigInt2 = BigInt(num2);
//   const max = Number.MAX_SAFE_INTEGER;
//   const resNum1 = BigInt.asIntN(max, bigInt1);
//   const resNum2 = BigInt.asIntN(max, bigInt2);
//   return (resNum1 * resNum2).toString();
// !
//   if (1 <= num1.length && num2.length <= 200) return (+num1 * +num2).toString();
// };

// console.log(multiply("123456789", "987654321"));

//? --------------------------------------------------------------------------------------------

//! 125. Valid Palindrome

// var isPalindrome = function (s) {
//   const reverseStr = s
//     .replace(/[^a-z0-9]/gi, "")
//     .toLowerCase()
//     .split("")
//     .reverse()
//     .join("");
//   return reverseStr === s.replace(/[^a-z0-9]/gi, "").toLowerCase();
// };
// console.log(isPalindrome("ab@a"));

//? --------------------------------------------------------------------------------------------

//! 977. Squares of a Sorted Array

// var sortedSquares = function (nums) {
//   console.log(nums.map((item) => Math.abs(item * item)).sort((a, b) => a - b));
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

//? --------------------------------------------------------------------------------------------

//! 412. Fizz Buzz

// var fizzBuzz = function (n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else {
//       arr.push(String(i));
//     }
//   }
//   return arr;
// };
// console.log(fizzBuzz(15));

//? --------------------------------------------------------------------------------------------

//! 561. Array Partition

// var arrayPairSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     res += Math.min(nums[i], nums[i + 1]);
//     i++;
//   }
//   return res;
// };
// console.log(arrayPairSum([1, 4, 3, 2]));

//? --------------------------------------------------------------------------------------------


