class MissingNumber {




    returnMissingNumber(arr){
        let sortedArr = arr.sort((a, b) => a - b);
        console.log(sortedArr);
        for(let i = 0; i <= arr.length -1; i++){
            let nextNum = sortedArr[(i + 1)] - sortedArr[i];
            if (nextNum !== 1 && nextNum !== 0 ){
                console.log(`missing number ${sortedArr[i] + 1}`);
               break;
    
            }
    
        }
    }





}
module.exports = MissingNumber;