$(document).ready(function()  {
  $("#employee-info").on('submit', function (event)  {
    event.preventDefault(); //stop default submit event behavior


    var employee = {}; //empty object we plan to poptulate

    var fields = $("#employee-info").serializeArray(); // jQuery function gives us form fields/inputs
    console.log('fields', fields);

    fields.forEach(function (element, index)  {  // loop over array elements
      employee[element.name] = element.value;   // add property and value to employee object

    });
    console.log('employee object', employee);

    // clear form data
    $("#employee-info").find('input[type=text]').val('');

    // appending to the DOM
    appendDom(employee);
  });

    function appendDom(emp) {

      var $info = $('#myTable');  //create a div jQuery object
      $info.append('<tr><td>' + emp['employee-first-name'] + '</td> <td>' + emp['employee-last-name'] +
      '</td> <td>' + emp["employee-id"] + '</td> <td>' + emp["employee-title"] + '</td> <td>' + emp["employee-annual-salary"]
      +'</td> <td><button type="button" class="btn btn-delete">Delete</button></td></tr>'); //add our employee data

      $("#myTable").append($info); //append our div to the DOM

  $(document).on('click', '.btn-delete', function() {  //allowing the delete button created to function by removing the nearest row.
    $(this).closest('tr').remove();
  });

  var myArray = new Array(); //creating a new array

  $('#myTable tr td:nth-child(5)').each(function(i) {   //array will store the emp["employee-annual-salary"] info when it is submitted
    myArray.push($(this).text());  //the array will contintue to add new values as they are entered
    for (var i = 0; i < myArray.length; i++) {
      myArray[i] = parseInt(myArray[i]); //changing the strings to values to allow for calculations in the future
    }
  });

var monthlyTotal = 0; //creating a new variable to store the montly cost of all employees annual salaries
for(var i = 0; i < myArray.length; i++) {
  monthlyTotal += myArray[i] << 0; //this will allow the monthlyTotal to update each time a new employees information is submitted
}
monthlyTotal = Math.round(monthlyTotal/12); //will take the total of all salaries divide them by 12 and round them off.

$('#monthlyExpenditure').html(monthlyTotal); //appending our monthlyTotal so it displays on our page
}
});
