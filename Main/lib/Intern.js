const Employee = require('./Employee'); 

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

getSchool() {
    return this.school;
}
    
//  —overridden to return 'Intern'
getRole() {
    return "Intern";
}

}

module.exports = Intern;
