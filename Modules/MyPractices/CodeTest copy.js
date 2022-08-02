/**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */
let numArrey = [21, 32, 12, 43, 45, 65, 12];

function removeValueFromArray(arr, value) {
   for (i = 0; i <= arr.length -1; i++){
        if(arr[i] == value){
            arr.splice(i, 1);
            
        }
   }
   console.log(arr);
}
//removeValueFromArray(numArrey, 12);

/**
  * Create a function to return the missing smallest positive number in given array
  * 
  * 
  * [1, 2, 3, 4, 5]   ->   6
  * 
  * [2, 3, 1, 56, 23, 11]  ->   4
  * 
  * [-1, 0, 2, 1]    ->  3
  * 
  * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
  * 
  * 
  */
let missingNumArrey = [-1, 0, 2, 1];

function returnMissingNumber(arr){
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    for(i = 0; i <= arr.length -1; i++){
        nextNum = sortedArr[(i + 1)] - sortedArr[i];
        if (nextNum !== 1 && nextNum !== 0 ){
            console.log(`missing number ${sortedArr[i] + 1}`);
           break;

        }

    }
}
console.log(missingNumArrey.sort());
returnMissingNumber(missingNumArrey);


 /**
  * Create a function to return the points to be marked against for over speeding.
  * 
  * For every 5mph over the speed limit, 1 point should be marked
  * 
  * function will:
  *      take userSpeed and speedLimit as input
  *      return the number of points should be marked against the license.
  * 
  * 
  * 
  * sl= 60 , us = 70 -> points = 2
  * 
  * sl = 60 , us = 63 -> points = 0
  * 
  * sl = 75 , us = 70 -> points = 0
  * 
  * sl = 80 , us = 88 -> points = 1
  */
 speedLimit = 65;
 currentSpeed = 75;

 function speedingPoints(speedL, speedC){
    let points = 0;
    let speedOver = speedC - speedL;
    count = 0;
    for (i = 0; i <= speedOver; i++){
        ++count;
        if (count % 5 == 0){
            ++points;
        }
    }

    console.log(points);


}

 //console.log();
//speedingPoints(speedLimit, currentSpeed);
