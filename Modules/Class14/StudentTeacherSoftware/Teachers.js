const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");
const Courses = require("./Courses");
const Students = require("./Students");
const { isStudentIdValid } = require("./Students");

    // const courseDetails = [
        
    // ];

class Teachers extends Members {

    static #idValue = 0;
    teacher = {
        tId : 0,
        // courseDetails :{
        //     courseName : '',
        //     courseLength: 0,            
        // },
        tSalary : 5000
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
     constructor(teacherName, teacherAge, teacherCountry, teacherCourseName) {
        super();
        if (teacherAge < 21){
            console.log('You need to be 21 or over to be hired.');
        
        } else if (teacherAge >= 21 && this.isCourseNameValid(teacherCourseName) && teacherCountry.toLowerCase().localeCompare('usa') === 0 ){
            const courseData = this.isCourseNameValid(teacherCourseName);
            this.applyMemberDetails(teacherName, teacherAge, teacherCountry);
            this.applyCourseChanges(teacherCourseName);
            this.teacher.tId = ++Teachers.#idValue;
            console.log(`Thank you ${this.member.name}. You have been hired as an Instructor for the ${courseData.courseName} class`);

        } else {
            console.log(`Do not hire.`);
        }
        // 
    }

    showMyDetails() {
        console.log(`\nTeacher details:\nId: ${this.teacher.tId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.appliedCourses.courseName}\nCourse Length: ${this.appliedCourses.courseLength} month(s)\nSalary: $${this.teacher.tSalary}\n`);
    }

    changeTeachingCourse(newCourse) {
        if (this.isCourseNameValid(newCourse) && this.appliedCourses.courseName == newCourse){
            console.log(`You are already teaching ${newCourse} course`);

        } else if (!(this.isCourseNameValid(newCourse))) {
            console.log('Please enter a correct course name');

        } else if (this.isCourseNameValid(newCourse)) {
            this.applyCourseChanges(newCourse);
            console.log(`Your course has been successfuly updated.\nCourse details:`);
            this.showMyDetails();
        }
        // code
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */

    addGrade(studentID, grade) {
     const test = isStudentIdValid(studentID);
     console.log(test);
     test['sGrade'] = 'A';
     console.log(test);
    
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    removeGrade() {
        // code
    }


}
module.exports = Teachers;