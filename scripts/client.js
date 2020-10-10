console.log('It Works!');

const employeeList = [];

$(document).ready(onReady);

function onReady() {
  console.log('stuff');

  $('.js-click-submit').on('click', clickToSubmit);
}

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

function render() {
  $('.js-employee-list').empty();
  for (let i = 0; i < employeeList.length; i++) {
    console.log('render', employeeList[i]);
    const item = employeeList[i];

    $('.js-employee-list').append(
      '<li>' +
        item.firstName +
        ', ' +
        item.lastName +
        ', ' +
        'idNum: ' +
        item.idNum +
        '</li>'
    );
  }
}
