class CodeTestSolutions {

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
    removeNumberFromArray1(arr, num) {
        let resultArr = [];
        for (let i=0 ; i < arr.length ; i++) {
            if (arr[i] !== num) {
                resultArr.push(arr[i]);
            }
        }
        return resultArr;
    }

    // Another solution for Question-1
    removeNumberFromArray2(arr, num) {
        let resultArr = [];
        arr.map(value => {
            if (value !== num) {
                resultArr.push(value);
            }
        });
        return resultArr;
    }

    // Another solution for Question-1
    removeNumberFromArray3(arr, num) {
        let resultArr = [];
        resultArr = arr.filter(value => value !== num);
        return resultArr;
    }

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
     */
    findMissingOne1(arr) {
        let missingNum = -1;
        let lookFor = 1;
        let isFound = false;
        while (!isFound) {
            for (let i=0 ; i < arr.length ; i++) {
                if (arr[i] === lookFor) {
                    isFound = true;
                    i = -1
                    lookFor++;
                }
            }
            if (isFound) {
                missingNum = lookFor;
                break;
            }
        }
        return missingNum;
    }

    // Another solution for Question-2
    findMissingOne2(arr) {
        let missingNum = -1;
        let lookFor = 1;
        let isFound = true;
        while (isFound) {
            isFound = arr.includes(lookFor);
            if (!isFound) {
                missingNum = lookFor;
                break;
            }
            lookFor++;
        }
        return missingNum;
    }












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
     *      63-60 = 3/5 = 0
     * 
     * sl = 75 , us = 70 -> points = 0
     * 
     * 
     * sl = 80 , us = 88 -> points = 1
     *      88-80 = 8/5 = 1
     * 
     * sl = 60 , us = 100 -> points = 8
     *      100-60 = 40/5 = 8
     * 
     * 
     * let sl;
     * console.log(sl);
     * 
     */
    getTrafficPoints(userSpeed, speedLimit) {
        let points = 0;
        if (userSpeed - speedLimit >= 5) {
            points = Math.floor((userSpeed-speedLimit)/5);
        }
        return points;
    }






}
module.exports = CodeTestSolutions;