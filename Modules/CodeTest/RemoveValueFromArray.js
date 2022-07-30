class removeValueFromArray {

    removeValueFromArray(arr, value) {
        for (let i = 0; i <= arr.length -1; i++){
             if(arr[i] == value){
                 arr.splice(i, 1);
                 
             }
        }
        console.log(arr);
     }
}
module.exports = removeValueFromArray;