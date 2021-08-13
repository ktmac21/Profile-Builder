
const Intern = require("../lib/Intern.js");

describe("getSchool", () => {
    it("should return a string of intern's school", () => {
        const school = "Penn";
        const employee = new Intern('Tom', 1234, 'example.com', school);
        expect(employee.getSchool()).toBe(school);
    });
});




describe("getRole", () => {

    it("should return a string of employee role", () => {
        const employee = new Intern('Tom', 1234, 'example.com')
        expect(employee.getRole()).toBe("Intern");
    });
});