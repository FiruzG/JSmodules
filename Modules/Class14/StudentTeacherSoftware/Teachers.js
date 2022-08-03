const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");
const Courses = require("./Courses");
const Students = require("./Students");
//const { isStudentIdValid } = require("./Students");


class Teachers extends Members {

    static #idValue = 0;
    teacher = {
        tId : 0,
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
            console.log(`Thank you ${this.member.name}. You have been hired as an Instructor for the ${courseData.courseName} class\n`);

        } else {
            console.log(`Do not hire.\n`);
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
            console.log(`You are already teaching ${newCourse} course\n`);

        } else if (!(this.isCourseNameValid(newCourse))) {
            console.log('Please enter a correct course name\n');

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
        const checkStudentId = Students.isStudentIdValid(studentID);
        let storeId = checkStudentId.id;

        if(typeof checkStudentId === 'undefined'){
            console.log('Invalid student ID\n');
        } else if(storeId === +studentID && checkStudentId.sGrade === ''){
            checkStudentId.sGrade = grade.toUpperCase();
            console.log(`The Grade for the Student ID: ${checkStudentId.id} is ${checkStudentId.sGrade}\n`);
        } else if(!checkStudentId.id) {
            console.log(`Invalid Stdent ID\n`);
        } else if(checkStudentId.sGrade){
            console.log(`Plese remove the grade first\n`);
        }
       
    
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
    removeGrade(studentID) {
        const checkStudentId = Students.isStudentIdValid(studentID);
        if(typeof checkStudentId === 'undefined'){
            console.log('Invalid student ID\n');
        } else if(checkStudentId.id === +studentID && checkStudentId.sGrade === ''){
            console.log(`The Student ID: ${checkStudentId.id} is not graded yet\n`);
        } else if(!checkStudentId.id) {
            console.log(`Invalid Stdent ID\n`);
        } else if(checkStudentId.sGrade){
            checkStudentId.sGrade = '';
            console.log(`Plese remove the grade first\n`);
        }
    }


}
module.exports = Teachers;