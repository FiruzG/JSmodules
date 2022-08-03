
class Courses {
    courseDetails = [
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

    appliedCourses ={
        courseName : '',
        coursePrice : 0,
        courseLength : 0
    }

            /**
     * we want course-object which has name as checkForCourse
     */
             isCourseNameValid(checkForCourse) {
                return this.courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
            }

            applyCourseChanges(courseName){
                const courseData = this.isCourseNameValid(courseName);
                this.appliedCourses.courseName = courseData.courseName;
                this.appliedCourses.courseLength = courseData.length;
                this.appliedCourses.coursePrice = courseData.price

            }





}
module.exports = Courses;

