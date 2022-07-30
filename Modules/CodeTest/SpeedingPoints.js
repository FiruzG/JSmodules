class speedingPoints {


    speedingPoints(speedLimit, speedCurrent){
        let points = 0;
        let speedOver = speedCurrent - speedLimit;
        let count = 0;
        for (let i = 0; i <= speedOver; i++){
            ++count;
            if (count % 5 == 0){
                ++points;
            }
        }
    
        console.log(points);
    
    
    }
}
module.exports = speedingPoints;