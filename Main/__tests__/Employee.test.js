const Employee = require("../lib/Employee.js");

describe("getName", () => {
    it("should return a string of employee name", () => {
        const name = "Katie";
        const employee = new Employee(name, 12, 'example.com');
        expect(employee.getName()).toBe(name);
    });
});
    

  describe("getId", () => {
    it("should return a string of employee ID", () => {
        const id = 12345;
        const employee = new Employee('Tom', id, 'example.com')
        expect(employee.getId()).toBe(id);
    });

});



  describe("getEmail", () => {
    
    it("should return a string input of employee email", () => {
      const email = "kteagles@yahoo.com";
      const employee = new Employee('Tom', 12345, email);
      expect(employee.getEmail()).toBe(email);
    });
});
    


  describe("getRole", () => {
    
    it("should return a string of employee role", () => {
     
      const employee = new Employee('Tom', 12345, 'example.com');
      expect(employee.getRole()).toBe('Employee');
    });
});


