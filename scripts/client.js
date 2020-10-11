// Global var for employee info
const employeeList = [];
let totalSalary = 0;
let monthlyTotal = 0;
// jQuery call to onReady function
$(document).ready(onReady);
// click event for submits
function onReady() {
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
  // object constructor for inputs
  const employee = {
    firstName,
    lastName,
    idNum,
    jobTitle,
    salary,
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
// delete employee while also splicing out the totalSalary
function deleteEmployee() {
  const index = $(this).data('index');
  if (index > -1) {
    totalSalary -= Number(employeeList[index].salary);
    employeeList.splice(index, 1);
  }
  displayEmployee();
}
// employee table scaffolding, and a template literal
function displayEmployee() {
  $('.js-employee-list').empty();
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
  totalMonthly();
}
// calculating the totalMonthly from annualSalary
function totalMonthly() {
  monthlyTotal = parseInt(totalSalary) / 12;

  let currency = monthlyTotal.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1,');

  $('.js-total-monthly').text(currency);
  if (monthlyTotal > 20000)
    $('.js-total-monthly').css('background-color', 'red');
  else {
    $('.js-total-monthly').css('background-color', 'white');
  }
}
