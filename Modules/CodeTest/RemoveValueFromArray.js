class removeValueFromArray {

    removeValueFromArray(arr, value) {
        console.log(`Removing ${value} from the ${arr}`);
        for (let i = 0; i <= arr.length -1; i++){
             if(arr[i] == value){
                 arr.splice(i, 1);
                 
             }
        }
        console.log(`The modified array is ${arr}`);
     }
}
module.exports = removeValueFromArray;