console.log('It Works!');

// Global var for employee info
const employeeList = [];
let totalSalary = 0;
let monthlyTotal = 0;

// jQuery call to onReady function
$(document).ready(onReady);

// click event for submits
function onReady() {
  console.log('onReady is ready');

  $('.js-click-submit').on('click', addEmployee);
  $('.js-employee-list').on('click', '.js-btn-delete', deleteEmployee);
}

// selectors with object for sending employee info
function addEmployee() {
  const firstName = $('.js-field-firstName').val();
  const lastName = $('.js-field-lastName').val();
  const idNum = $('.js-field-idNum').val();
  const jobTitle = $('.js-field-jobTitle').val();
  const salary = $('.js-field-salary').val();

  const employee = {
    firstName,
    lastName,
    idNum,
    jobTitle,
    salary,
    // isDeleted: false,
  };
  employeeList.push(employee);
  displayEmployee();
  $('.js-field-firstName').val('');
  $('.js-field-lastName').val('');
  $('.js-field-idNum').val('');
  $('.js-field-jobTitle').val('');
  $('.js-field-salary').val('');

  totalSalary += parseInt(salary);

  totalMonthly();
}

function deleteEmployee() {
  const index = $(this).data('index');
  // employeeList[index].isDeleted = true;

  $(this)
    .parent() // td
    .parent() // tr
    .remove(); // ('isDeleted');

  totalMonthly();
}

// employee table scaffolding, and a template literal
function displayEmployee() {
  $('.js-employee-list').empty();
  // let totalSalary = 0;
  for (let i = 0; i < employeeList.length; i++) {
    const item = employeeList[i];

    if (item.isDeleted === true) {
    } else
      $('.js-employee-list').append(
        `<tr>
       <td>${item.firstName}</td>
       <td>${item.lastName}</td>
       <td>${item.idNum}</td>
       <td>${item.jobTitle}</td>
       <td>${item.salary}</td>  
       <td><button class="js-btn-delete" data-index="${i}">Delete</button></td>
      </tr>`
      );
  }
}

function totalMonthly() {
  // let monthlyTotal = 0;
  monthlyTotal = parseInt(totalSalary) / 12;

  $('.js-total-monthly').text(monthlyTotal);
  if (monthlyTotal > 20000)
    $('.js-total-monthly').css('background-color', 'red');
  else {
    $('.js-total-monthly').css('background-color', 'white');
  }
}

// notes for some code logic
/*
function deleteEmployee() {
  const index = $(this).data('index');
  displayEmployee(index).isDeleted = true;

  $(this).parent().parent().empty();
  console.log('working?');

  adjustSalary();
}
*/
/*
function adjustSalary() {
  let monthlySalary = 0;
  for (let i = 0; i < employeeList.length; i++) {
    const item = employeeList[i];
  }
  if (item.isDeleted === false) {
    monthlySalary += parseInt(item.annualSalary / 12);
  }
  console.log(monthlySalary);
  $('.js-total-salary').text(monthlySalary);
  if (monthlySalary > 20000)
    $('.js-total-salary').css('background-color', 'red');
  else if (monthlySalary < 20000)
    $('.js-total-salary').css('background-color', 'white');
}
*/
/*
const item = employeeList[i];
totalSalary += parseInt(item.annualSalary / 12);
*/
