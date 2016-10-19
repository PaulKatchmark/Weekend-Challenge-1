var app = angular.module('employeeApp', []);

app.controller('EmpController', function() {
    console.log("EmpController loaded");

    var person = this;
    person.infos = [];
    person.totalSalary = 0;

    person.createInfo = function() {
        person.infos.push(angular.copy(person.info)); //enters all submitted information in our array
        person.info = null; //clears input fields after function is called
        person.calculateAverage(); //function is run on submit to calculate total month expenses
    };

    person.removeRow = function(info) { //function to remove a specific table row cooresponding with the appropriate delete button
        var index = person.infos.indexOf(info); //variable that we will target
        person.infos.splice(index, 1); //removes the appropriate index value of the array
        person.totalSalary -= info.salary; //subtracts that row's salary from the totalSalary upon deletion
    };

    person.calculateAverage = function() { //function that is used to calculate total of all salaires, then it is divided by 12 and converted to U.S. dollars on the html side
        person.totalSalary = 0; //resets value of totalSalary everytime function is run
        person.infos.forEach(function(employee) { //checks each array that is entered
            person.totalSalary += employee.salary; //and adds the new salary to the totalSalary
        });
    };
});
