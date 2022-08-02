const Courses = require("./Courses");
const MyStringFunctions = require("./MyStringFunctions");

class Members extends Courses {

    member = {
        name: '',
        age: 0,
        location: ''
    }


    showMyDetails() {
        console.log(`Name: ${this.member.name}\nAge: ${this.member.age}\nLocation: ${this.member.location}`);
        // console.log(this.member);
    }

    applyMemberDetails(mName, mAge, mLocation){
        this.member.name = MyStringFunctions.toTitleCase(mName);
        this.member.age = mAge;
        this.member.location = mLocation.toUpperCase();

    }


}
module.exports = Members;