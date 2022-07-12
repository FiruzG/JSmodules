// if day is Mon, monday -> print ("Today is the Technosoft class")
//     if day is tue -> print ("Today is self learning day")
//     if day is Wed -> print ("Today is the Technosoft class")
//     if day is Thu -> print ("Today is self learning day")
//     if day is Fri -> print ("Today is the Technosoft class")
//     if day is Sat -> print ("Today is lab session day")
//     if day is sun -> print ("No study today")
//     Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
//     User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY

let dayOfTheWeek = 'monday';
const dayOfTheWeekLower = dayOfTheWeek.toLowerCase();

if (dayOfTheWeekLower == 'mon' || dayOfTheWeek == 'monday') {
    console.log('Today is the Technosoft class');
} else if (dayOfTheWeekLower == 'tue' || dayOfTheWeek == 'tuesday') {
    console.log("Today is self learning day");
} else if (dayOfTheWeekLower == 'wed' || dayOfTheWeek == 'wednsday'){
    console.log("Today is the Technosoft class");
} else if (dayOfTheWeekLower == 'thu' || dayOfTheWeek == 'thursda'){

} else{
    console.log("Entered day-value is not valid");
}