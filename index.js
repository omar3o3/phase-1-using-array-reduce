const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = () => {
//     return batteryBatches.reduce((accumulator, item) => {
//         let total = item.price;
//     })
// }

//^^^^#1 not addding stuff*******************************************************************************

// let totalBatteries = (accumulator , item) => {
//     let total = accumulator + item;
//     return total;
// }

// batteryBatches.reduce(totalBatteries, 0);

//^^^^#2 not adding stuff**********************************************************************************

// let totalBatteries = adder.reduce((accumulator, item) => {
//     return accumulator + item;
// } ,0)

//^^^^#3 saying totalBatteries variable doesnt exist*******************************************************

// let totalBatteries = () => {
//     return batteryBatches.reduce((accumulator, item) => {
//         let total = accumulator + item;
//         console.log(total);
//         return total;
//     } , 0)
// }


//^^^^#4 still not returning anything, might need to use map***************************************************

let totalBatteries = batteryBatches.reduce((accumulator, item) => accumulator + item , 0);

// console.log(totalBatteries);

//^^^^#5 CORRECT ANSWER, GOT IT FROM MDN********************************************************************


// const array1 = [1, 2, 3, 4];

// const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

// console.log(sumWithInitial);

//^^^^ example problem from mdn*********************************************************************************

// let totalBatteries = batteryBatches.reduce((accumulator, item) => accumulator + item , 0);

// console.log(totalBatteries);


//^^^^#6 ********************************************************************

