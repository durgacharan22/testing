// var arr = [1, 2, 3, 4, 5, 4, 3, 2, 6, 7, , 56, 7]

// var uniqueArr = arr.filter(function (element, index) {
//     return arr.indexOf(element) == index;
// })

// console.log(uniqueArr);
// var ch = function (num, callback) {
//     int = setInterval(function () {
//         console.log("after 2 seconds")
//     }, num)
//     callback();
// }
// ch(2000, function () {
//     setTimeout(function () {
//         clearInterval(int)
//     }, 7000)
// })

// var ch = 98;

// var outer = function (inner) {
//     // var c = 9;
//     inner();
// }


// outer(function () {
// console.log(c)
//     console.log(ch)
// });
// inner();


var express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('running on 3000');
})

app.get('/', function (req, res) {
    // alert('in home page');
    res.send('hello')
    console.log('in home page');
})