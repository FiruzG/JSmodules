const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

    // Array of course-objects
    const courseDetails = [
        {
            courseName : 'Automation',
            price : 1000,
            length : 6
        },
        {
            courseName : 'QA',
            price : 2000,
            length : 8,
           
        },
        {
            courseName : 'Mobile',
            price : 3000,
            length : 12
        }
    ];


class Students extends Members {

    static #idValue = 0;
    #student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }

    /**
     * age >= 16
     *      if not, do not enroll and show message, student has to be of 16 or above
     *
     * if invalid studentCourse
     *      do not enroll and show message, student should provide correct course name
     * 
     * all students must be within usa (USA, United States of America)
     *      if not, do not enroll and show message, student has to inside the United States of America
     * 
     * if data is correct
     *      Congratulations for enrolling in <courseName>
     *      Student id : XX
     */
    constructor(studentName, studentAge, studentCountry, studentCourse) {
        super();
        if (studentAge >= 16 && this.#isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            this.applyCourseChanges(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry.toUpperCase();
            this.#student.sId = ++Students.#idValue;
            console.log(`\nThank you for enrolling.\nYour id value is ${this.#student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }

    applyCourseChanges(courseName){
        const courseData = this.#isCourseNameValid(courseName);
        this.#student.sCourseDetails.courseName = courseData.courseName;
        this.#student.sCourseDetails.coursePrice = courseData.price;
        this.#student.sCourseDetails.courseLength = courseData.length;
        this.#student.sBalance = courseData.price;
    }


    showMyDetails() {
        console.log(`\nStudent details:\nId: ${this.#student.sId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#student.sCourseDetails.courseName}\nCourse Length: ${this.#student.sCourseDetails.courseLength} month(s)\nBalance: $${this.#student.sBalance}\n`);
        // console.log(this.student);
    }

    /**
     * we want course-object which has name as checkForCourse
     */
    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
    
    /**
        changeCourse
        submitDocuments
        makePayment
        dropOut
        orderBooks
    */


    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }

    /**
     * changeCourse
     * 
     * input: newCourseName
     * 
     * if newCourseName is valid AND student is not already enrolled in the course
     *      then change the course name
     *      update the course-length as per the new course-length
     *      update the course-price as per the new course-price
     *      update the student-balance as per the new course-price
     * 
     * if newCourseName is invalid
     *      then print msg -> Invalid course name
     * 
     * if student is already enrolled in the course
     *      then print -> You are already enrolled in the course
     * 
     */


    changeCourse(newCourse){
        if (this.#isCourseNameValid(newCourse) && this.#student.sCourseDetails.courseName == newCourse){
            console.log(`Student ${this.member.name} is already enroled in ${newCourse} course`);

        } else if (!(this.#isCourseNameValid(newCourse))) {
            console.log('Please enter a correct course name');
            // code to loop through a courseDetails and print 
            // a string with the name of the coruses available to choose

        } else if (this.#isCourseNameValid(newCourse)) {
            this.applyCourseChanges(newCourse);
            console.log(`Your course has been successfuly updated.\nCourse details:`);
            this.showMyDetails();
        }
        }

    
    /**
     * makePayment
     * 
     * input : amount
     * 
     * if amount is > 0 and less or equal to balance
     *      print -> Thank you for making payment of $amount
     *      and update the student balance.
     *      if balance is zero, print -> No more payment required.
     *      else -> Updated balance is $balance
     * 
     * if amount is invalid
     *      print -> Invalid amount. Your balance is $balance
     * 
     */
    makePayment(amount){

        if (this.#student.sBalance == 0) {
            console.log(`Your current balance is $${this.#student.sBalance}. No more payment is required`);
        } else if (amount > 0 && this.#student.sBalance >= amount){
            console.log(`Your balance before payment: ${this.#student.sBalance}`);
            this.#student.sBalance -= amount;
            console.log(`Your payment of $${amount} has been submited. Thank you.\nYour remaining balance is ${this.#student.sBalance}`);
        } else {
            console.log(`Invalid entry. Please enter correct amount.\nYour current balanse is $${this.#student.sBalance}`);
        }
        
        
        
    }


}
module.exports = Students;