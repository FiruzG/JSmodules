const Students = require('./Students');


let s1; 
let s2; 
let s3;

    // s1 = new Students('jOHn', 2, 'USA', 'mobile');
    // s1.showMyDetails();






try {
    s1 = new Students('jOHn', 2, 'USA', 'mobile');
    s1.showMyDetails();

} catch(e) {
    console.log('\nPlease enter valid data\n');
} finally {
    console.log('Thank you for considering our institution\n\n');
}


// try {
//     s2 = new Students('Gigi', 2, 'USA', 'QA');
//     s2.showMyDetails();

// } catch(e) {
//     console.log('Please enter valid data');
// } finally {
//     console.log('Thank you for considering our institution');
// }


// try {
//     s3 = new Students('kiAN', 2, 'uSa', 'moBiLE');
//     s3.showMyDetails();
// } catch(e) {
//     console.log('Please enter valid data');
// } finally {
//     console.log('Thank you for considering our institution');
// }


// try {
//     const s4 = new Students('kiAN', 22, 'uSa', 'moBiLE');
//     s4.showMyDetails();
// } catch(e) {
//     console.log('Please enter valid data');
// } finally {
//     console.log('Thank you for considering our institution');
// }

// try {
//     const s5 = new Students('kiAN', 21, 'uSa', 'moBiLE');
//     s5.showMyDetails();
// } catch(e) {
//     console.log('Please enter valid data');
// } finally {
//     console.log('Thank you for considering our institution');
// }


/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/


// const s2 = new Students('Gigi', 20, 'USA', 'QA');
/*
    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/



