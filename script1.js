// 1)

// let x = 9;
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i = 0; i < 10; i++){
//     if (array[i] == x );
//     console.log('Tablica zawiera x na ' + (array.indexOf(9) + 1) + ' miejscu');
// }


// 2)
// var car = {}
// car.make = 'toyota',
// car.model = 'avensis',
// car.year = '2016',
// car.fuel = 'diesel';

// console.log(car);
// console.log(car.fuel);
// console.log(car.year);


// // 3)
// var car2 = {
// make: 'ford',
// model2: 'focus',
// year2: '1999',
// fuel2: 'petrol',
// size2: 'huge',
// // sound2:
// //     function() {
// //     console.log('wrrr');
// // }
// }

// console.log(car2);
// console.log(car2.fuel);
// console.log(car2.year);
// // console.log(mycar2.sound2())

// var car3 = Object.assign({}, car, car2);

// console.log(car3);


// 4)
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(2, 3));

// 5)
// function sumN(){
//     let sum = 0;
//     for(i = 0; i < arguments.length; i++){
//     sum += arguments[i];
// }
//     return sum;
// }

// console.log(sumN(2, 5));


// 6)
// var go = function(a, b) {
//     return a + b;
// }

// console.log(go(3, 4));

// var superSum = go;

// console.log(superSum(2,3));


// 7)
// function mul(a, b) {
//     return a * b;
// }

// 8) Arrow functions

// const doIt = (a, b, c) => (a * b) / c;

// console.log(doIt(4, 8, 3));

// 9) automatyczne wywoływanie funckji
// (function add(a, b){
//     var sum = a + b;
//     console.log(sum)
//     return sum
// })(2,5)

// 10)
// function main(a, b){
//     let c = Math.pow(a, 2);
//     let d = Math.pow(b, 2);
//      function sum(c, d){
//         return c + d;
//     }
//     return sum(c, d);
// }
// console.log(main(3,4));

// 11) Ciag Fibonacciego
// function fibo(i){
//     if (i<=0){
//         return 0;
//             }
//     else if(i==1){
//         return 1;
//     }
//     {
// return fibo(i-1) + fibo(i-2)
//     }
// }

// console.log(fibo(6));

// 12) Recursive function

// function loop(i){
//     console.log(i);
//     if (i >= 15){
//         return;
//     }
//     loop(i+1);
// }
// loop(4);

//  13) To samo za pomocą pętli
// function loop(x){
// while (x<=15){
// console.log(x);
// x++
// }
// }
// loop(4);

// 14)

var index = sessionStorage.getItem('index', index);

function addPerson(name){
   localStorage.setItem('person' + index, name);
   index++;
   sessionStorage.setItem('index', index);
}

function removePerson(key){
    localStorage.removeItem(key);
}

addPerson('Marek');
addPerson('Wiktor');
addPerson('Jan');

removePerson('person2');
