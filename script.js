"use strict";

/* function isIsogram(str) {
  const strUniq = new Set(str.toLowerCase());
  const result =
    str.toLowerCase().length === strUniq.size
      ? "true"
      : str === ""
      ? "true"
      : "false";
  return result;
}

console.log(isIsogram("isIsogram")); */

// function explode(s) {
//   let resultArr = [];
//   const repeatArr = s.split("").forEach((el) => {
//     resultArr.push(el.repeat(el));
//   });
//   return resultArr.join("");
// }

// console.log(explode("102269"));

// function count(str) {
//   const resArr = [];
//   const strLow = str.toLowerCase();
//   for (let i = 0; i < strLow.length; i++) {
//     if (strLow.indexOf(strLow[i]) !== strLow.lastIndexOf(strLow[i])) {
//       resArr.push(")");
//     } else {
//       resArr.push("(");
//     }
//   }
//   return resArr.join("");
// }

// console.log(count("(( @"));

// function nthFibo(n) {
//   if (n == 1) return 0;
//   if (n == 2 || n == 3) return 1;
//   return nthFibo(n - 1) + nthFibo(n - 2);
// }

// console.log(nthFibo(4));

// function solution(number) {
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(solution(10));

// function head(array) {
//   let firstValue = array[0];
//   return +firstValue;
// }

// function tail(array) {
//   const resArr = array.slice(1);
//   return resArr;
// }

// function init(array) {
//   const resArr = [...array];
//   resArr.pop();
//   return resArr;
// }

// function last(array) {
//   return array.slice(-1).pop();
// }

// console.log(head([1, 2, 3, 4, 5]));
// console.log(tail([1, 2, 3, 4, 5]));
// console.log(init([1, 2, 3, 4, 5]));
// console.log(last([1, 2, 3, 4, 5]));

// function deepCount(a) {
//   return a.reduce((acc, el) => {
//     return acc + (Array.isArray(el) ? deepCount(el) : 0);
//   }, a.length);
// }

// function getLengthOfMissingArray(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return 0;

//   if (arr.some((innArr) => !Array.isArray(innArr))) return 0;

//   arr.sort((a, b) => b.length - a.length);

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i].length - arr[i + 1].length !== 1) return arr[i].length - 1;
//   }
// }

// console.log(
//   getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
// );

// function createSecretHolder(secret) {
//   let obj = {
//     secret,

//     getSecret() {
//       return this.secret;
//     },

//     setSecret(newSecret) {
//       this.secret = newSecret;
//       return;
//     },
//   };
//   return obj;
// }

// const obj = createSecretHolder(5);
// console.log(obj);

// function myLanguages(results) {
//   const sortable = Object.entries(results);
//   sortable.sort((a, b) => b[1] - a[1]);
//   console.log(sortable);
//   let resArr = [];
//   for (const [key, value] of sortable) {
//     if (value >= 60) resArr.push(key);
//   }
//   return resArr;
// }

// const prime = { Hindi: 60, Dutch: 93, Greek: 71 };
// console.log(myLanguages(prime));

// const runLengthEncoding = function (str) {
//   let result = [];
//   if (str.length > 0) {
//     let count = 1;
//     let value = str[0];
//     for (let i = 1; i < str.length; i++) {
//       let entry = str[i];
//       if (entry == value) {
//         count += 1;
//       } else {
//         result.push([count, value]);
//         count = 1;
//         value = entry;
//       }
//     }
//     result.push([count, value]);
//   }
//   return result;
// };

// runLengthEncoding("hello world!");

// function recycle(array) {
//   let result = [[], [], [], []];
//   array.filter(function (e, _, arr) {
//     if (e.material === "paper" || e.secondMaterial === "paper")
//       result[0].push(e.type);
//     if (e.material === "glass" || e.secondMaterial === "glass")
//       result[1].push(e.type);
//     if (e.material === "organic" || e.secondMaterial === "organic")
//       result[2].push(e.type);
//     if (e.material === "plastic" || e.secondMaterial === "plastic")
//       result[3].push(e.type);
//   });
//   return result;
// }

// let example = [
//   { type: "rotten apples", material: "organic" },
//   {
//     type: "out of date yogurt",
//     material: "organic",
//     secondMaterial: "plastic",
//   },
//   { type: "wine bottle", material: "glass", secondMaterial: "paper" },
//   { type: "amazon box", material: "paper" },
//   { type: "beer bottle", material: "glass", secondMaterial: "paper" },
// ];
// console.log(recycle(example));

// function formatDuration(num) {
//   if (num === 0) {
//     return "now";
//   }

//   if (num < 1) {
//     return "0";
//   }

//   const qualifier = (num) => (num > 1 ? "s" : "");
//   const numToStr = (num, unit) =>
//     num > 0 ? ` ${num} ${unit}${qualifier(num)}` : "";
//   const oneMinute = 60;
//   const oneHour = oneMinute * 60;
//   const oneDay = oneHour * 24;
//   const oneYear = oneDay * 365;
//   const times = {
//     year: ~~(num / oneYear),
//     day: ~~((num % oneYear) / oneDay),
//     hour: ~~((num % oneDay) / oneHour),
//     minute: ~~((num % oneHour) / oneMinute),
//     second: num % oneMinute,
//   };
//   let str = "";
//   for (let [key, value] of Object.entries(times)) {
//     str += numToStr(times[key], key);
//   }
//   const arr = str.trim().split(" ");
//   const res = [];
//   arr.forEach((x, i) => {
//     if (i % 2 === 0 && i !== 0) res.push(i === arr.length - 2 ? "and" : ",");
//     res.push(x);
//   });
//   return res.join(" ").replace(/\s,/g, ",");
// }

// console.log(formatDuration(0));

// const d = Number(seconds);
// const y = Math.floor(d / 31536000);
// const day = Math.floor(d / 86400);
// const h = Math.floor(d / 3600);
// const m = Math.floor((d % 3600) / 60);
// const s = Math.floor((d % 3600) % 60);

// let yDisplay = y > 0 ? y + (y === 1 ? " year, " : " years, ") : "";
// let dayDisplay = day > 0 ? day + (day === 1 ? " day, " : " days, ") : "";
// let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours ") : "";
// let mDisplay = m > 0 ? m + (m === 1 ? " minute and " : " minutes and ") : "";
// let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

// if (seconds === 120) {
//   return `${m} minutes`;
// }

// if (seconds === 3600) {
//   return `${h} hour`;
// }

// return `${yDisplay}${dayDisplay}${hDisplay}${mDisplay}${sDisplay}`;

// document.addEventListener("keydown", function (event) {
//   console.log(`You press ${event.key}`);
// });

// function countPairs(s1, s2) {
//   let freq1 = new Array(40);
//   let freq2 = new Array(40);
//   freq1.fill(0);
//   freq2.fill(0);

//   let i,
//     count = 0;
//   let len1 = s1.length;
//   let len2 = s2.length;

//   for (i = 0; i < len1; i++) freq1[s1[i].charCodeAt() - "a".charCodeAt()]++;

//   for (i = 0; i < len2; i++) freq2[s2[i].charCodeAt() - "a".charCodeAt()]++;

//   for (i = 0; i < 40; i++) count += Math.min(freq1[i], freq2[i]);

//   return count;
// }

// let s1 = "aabbcc",
//   s2 = "aabbc";
// console.log(countPairs(s1, s2));

// function deleteDigit(num) {
//   let arrDig = [];
//   let res = 0;
//   while (num) {
//     arrDig.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   console.log(arrDig);

//   for (let iNum = 0; iNum < arrDig.length; iNum++) {
//     let n = 0;
//     for (let i = arrDig.length - 1; i >= 0; i--) {
//       if (i !== iNum) {
//         n = n * 10 + arrDig[i];
//         console.log(n);
//       }
//     }
//     res = Math.max(n, res);
//   }
//   return res;
// }

// console.log(deleteDigit(2564));

// function encodeLine(str) {
//   return str.replace(/([a-z])\1*/g, (substr) =>
//     substr.length > 1 ? substr.length + substr[0] : substr[0]
//   );
// }

// console.log(encodeLine("aaabbcccc"));

// function matrixElementsSum(matrix) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] == 0 && i + 1 < matrix.length) {
//         matrix[i + 1][j] = 0;
//       }
//       sum += matrix[i][j];
//     }
//   }
//   return sum;
// }

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];

// console.log(matrixElementsSum(matrix));

// function isMAC48Address(inputString) {
//   return inputString !== null
//     ? /^[0-9A-F]{2}(?:-[0-9A-F]{2}){5}$/.test(inputString)
//     : false;
// }
// console.log(isMAC48Address("00-1B-63-84-45-E6"));

// function countCats(innerArr) {
//   let sumArr = [];
//   innerArr.forEach((box) => {
//     box.filter((e) => (e === "^^" ? sumArr.push(e) : false));
//   });
//   return sumArr.length;
// }

// let innerArr = [
//   [0, "^^", 2],
//   [0, 3, 2],
//   [0, "^^", 2],
// ];

// console.log(countCats(innerArr));

// const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;

// function dateSample(sampleActivity) {
//   return typeof sampleActivity !== "string" ||
//     isNaN(sampleActivity) ||
//     sampleActivity.length === 0 ||
//     sampleActivity <= 0 ||
//     sampleActivity > MODERN_ACTIVITY
//     ? false
//     : Math.ceil(
//         Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
//       );
// }

// console.log(dateSample("1"));

// function getSeason(date) {
//   if (typeof date === "object") {
//     let month = String(date.getMonth());
//     let season = "";
//     switch (month) {
//       case "12":
//       case "1":
//       case "2":
//         season = "winter";
//         break;
//       case "3":
//       case "4":
//       case "5":
//         season = "spring";
//         break;
//       case "6":
//       case "7":
//       case "8":
//         season = "summer";
//         break;
//       case "9":
//       case "10":
//       case "11":
//         season = "autumn";
//         break;
//     }
//     return season;
//   } else {
//     throw new Error("Invalid date!");
//   }
// }

// console.log(getSeason(new Date(2020, 02, 31)));
// let transform = function (arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
//   if (!arr.length) return [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "--discard-next") {
//       return (arr.slice(0, i) + "," + arr.slice(i + 2)).split(",");
//     } else if (arr[i] === "--discard-prev") {
//       return (arr.slice(0, i - 1) + "," + arr.slice(i + 1)).split(",");
//     } else if (arr[i] === "--double-next") {
//       return (
//         arr.slice(0, i) +
//         "," +
//         arr[i + 1] +
//         "," +
//         arr.slice(i + 1)
//       ).split(",");
//     } else if (arr[i] === "--double-prev") {
//       return (
//         arr.slice(0, i) +
//         "," +
//         arr[i - 1] +
//         "," +
//         arr.slice(i + 1)
//       ).split(",");
//     }
//   }
// };

// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
//   if (!arr.length) return [];
//   arr.flatMap((v, i, a) => {
//     if (a[i + 1] === "--discard-prev") return [];
//     if (a[i - 1] === "--discard-next") return [];
//     if (a[i - 1] === "--double-next") return [v, v];
//     if (a[i + 1] === "--double-prev") return [v, v];

//     if (v.toString().startsWith("--d")) return [];
//   });
// }

// console.log(transform([1, 1, "--discrard-next", true]));

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   getRoot() {
//     return this.root;
//   }

//   add(data) {
//     let newNode = new Node(data);
//     if (this.root === null) this.root = newNode;
//     else this.addNode(this.root, newNode);
//   }

//   addNode(node, newNode) {
//     if (newNode.data < node.data) {
//       if (node.left === null) node.left = newNode;
//       else this.addNode(node.left, newNode);
//     } else {
//       if (node.right === null) node.right = newNode;
//       else this.addNode(node.right, newNode);
//     }
//   }

//   remove(data) {
//     this.root = this.removeNode(this.root, data);
//   }

//   removeNode(node, key) {
//     if (node === null) return null;
//     else if (key < node.data) {
//       node.left = this.removeNode(node.left, key);
//       return node;
//     } else if (key > node.data) {
//       node.right = this.removeNode(node.right, key);
//       return node;
//     } else {
//       if (node.left === null && node.right === null) {
//         node = null;
//         return node;
//       }
//       if (node.left === null) {
//         node = node.right;
//         return node;
//       } else if (node.right === null) {
//         node = node.left;
//         return node;
//       }

//       let debt = this.min(node.right);
//       node.data = debt.data;

//       node.right = this.removeNode(node.right, debt.data);
//       return node;
//     }
//   }

//   min(node) {
//     if (node.left === null) return node;
//     else return this.min(node.left);
//   }

//   find(node, data) {
//     if (node === null) return null;
//     else if (data < node.data) return this.find(node.left, data);
//     else if (data > node.data) return this.find(node.right, data);
//     else return node;
//   }
// }

// let BST = new BinarySearchTree();
// BST.add(15);
// BST.add(5);
// BST.add(4);
// BST.add(3);
// BST.add(2);
// BST.add(1);

// let root = BST.getRoot();
// console.log(root);

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.items.length == 0) return undefined;
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }
// }

// let stack = new Stack();
// stack.push(15);
// stack.push(20);
// stack.push(18);
// stack.push(19);
