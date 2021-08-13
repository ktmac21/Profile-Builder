const Manager = require("../lib/Manager.js");

describe("getNumber", () => {
    it("should return a string of office number", () => {
        const number = 2153456789;
        const employee = new Manager('Tom', 1234, 'example.com', number);
        expect(employee.getNumber()).toBe(number);
    });
});



describe("getRole", () => {
    
    it("should return a string of employee role", () => {
      const employee = new Manager('Tom', 1234, 'example.com')
      expect(employee.getRole()).toBe("Manager");
    });
  });