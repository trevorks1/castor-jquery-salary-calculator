console.log('It Works!');

// Global var for employee info
const employeeList = [];

// jQuery call to onReady function
$(document).ready(onReady);

// click event for submits
function onReady() {
  console.log('onReady is ready');

  $('.js-click-submit').on('click', clickToSubmit);
  $('.js-employee-list').on('click', '.js-btn-selector', selectEmployee);
}

// selectors with object for sending employee info
function clickToSubmit() {
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
  };
  employeeList.push(employee);
  render();
}

function selectEmployee() {
  console.log(selectEmployee);
  $(this)
    .parent() // td
    .parent() // tr
    .addClass('isSelected');
}

// employee table scaffolding, and a template literal
function render() {
  $('.js-employee-list').empty();
  for (let i = 0; i < employeeList.length; i++) {
    console.log('render', employeeList[i]);
    const item = employeeList[i];

    $('.js-employee-list').append(
      `<tr>
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.idNum}</td>
        <td>${item.jobTitle}</td>
        <td>${item.salary}</td>
        <td><button class="js-btn-selector">Submit</button></td>
       </tr>`
    );
  }
}
