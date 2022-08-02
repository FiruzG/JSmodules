const Students = require('./Students');
const Teachers = require('./Teachers');


const s1 = new Students('jOHn', 20, 'USA', 'mobile');

//s1.showMyDetails();


const s2 = new Students('gigi', 20, 'USA', 'QA');
const t1 = new Teachers('deepak', 21, 'USA', 'QA');
const t2 = new Teachers('Firuz', 21, 'USA', 'Mobile');
t1.showMyDetails();
t1.changeTeachingCourse('Mobile');
t2.showMyDetails();
t2.addGrade(2);
//s2.isStudentIdValid(2);
//console.log(s2.isStudentIdValid(2));






// s2.enrollment('Gigi', 20, 'USA', 'QA');


// s2.showMyDetails();
// s2.changeCourse('Mobile');
// s2.makePayment(100);
//s2.isStudentIdValid(4);
// s2.makePayment(1000);
//s2.showMyDetails();


//const s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');

//s3.showMyDetails();

