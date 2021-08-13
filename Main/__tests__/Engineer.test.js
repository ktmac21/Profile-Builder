const Engineer = require("../lib/Engineer.js");

describe("getGithub", () => {
    it("should return a string of github username", () => {
        const github = "ktmac21";
        const employee = new Engineer('Tom', 1234, 'example.com', github);
        expect(employee.getGithub()).toBe(github);
    });
});
    
    


describe("getRole", () => {
    
  it("should return a string of employee role", () => {
    const employee = new Engineer('Tom', 1234, 'example.com')
    expect(employee.getRole()).toBe("Engineer");
  });
});

