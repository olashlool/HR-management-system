' use strict'

let allEmployeeObject = [];

function Employee(employeeID, fullName, department, level, empImage) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department
  this.level = level 
  this.empImage = empImage;

  if (this.level == "Senior") {
    var sal = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    this.salary = sal - (sal * 0.075);
  }
  else if (this.level == "Mid-Senior") {
    var sal = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    this.salary = sal - (sal * 0.075);
  }
  else {
    var sal = Math.floor(Math.random() * (1000 - 500)) + 500;
    this.salary = sal - (sal * 0.075);
  }
}

function getData() {
  var data = localStorage.getItem("emplooyes");
  if (!data) return;
  let parsedData = JSON.parse(data)
  console.log(typeof data);
  allEmployeeObject = [];

  for (let i = 0; i < parsedData.length; i++) {
    const emp = parsedData[i];
    var newEmp = new Employee(emp.employeeID, emp.fullName, emp.department, emp.level, emp.empImage);
    allEmployeeObject.push(newEmp);
  }
}

getData();

let adminEmployees ={
  employeesCount : 0,
  totalSalaray : 0,
  avgSalary: function() {
    return this.totalSalaray / this.employeesCount;
  }
}
let marketingEmployees ={
  employeesCount : 0,
  totalSalaray : 0,
  avgSalary: function() {
    return this.totalSalaray / this.employeesCount;
  }
}
let devEmployees ={
  employeesCount : 0,
  totalSalaray : 0,
  avgSalary: function() {
    return this.totalSalaray / this.employeesCount;
  }
}
let finEmployees ={
  employeesCount : 0,
  totalSalaray : 0,
  avgSalary: function() {
    return this.totalSalaray / this.employeesCount;
  }
}

let allEmployees ={
  employeesCount : 0,
  totalSalaray : 0,
  avgSalary: function() {
    return this.totalSalaray / this.employeesCount;
  }
}

allEmployeeObject.forEach(e => {
  if(e.department === "Administration")
  {
    adminEmployees.employeesCount++;
    adminEmployees.totalSalaray += e.salary;
  }
  else if(e.department === "Marketing")
  {
    marketingEmployees.employeesCount++;
    marketingEmployees.totalSalaray += e.salary;
  }
  else if(e.department === "Development")
  {
    devEmployees.employeesCount++;
    devEmployees.totalSalaray += e.salary;
  }
  else if(e.department === "Finance")
  {
    finEmployees.employeesCount++;
    finEmployees.totalSalaray += e.salary;
  }

  allEmployees.employeesCount++;
  allEmployees.totalSalaray += e.salary;
});

let mainDiv = document.getElementById("mainDiv");

let mainDivAcc = document.getElementById("mainDivAcc")

let rendermainTable = function () {
  let table = document.createElement("table");
  innerHtml = "";
  table.innerHTML = `
  <table id="hrtable">
   <tr>
      <th>Department</th>
      <th># of Emplooyes</th>
      <th>Total Salary</th>
      <th>Average</th>
   </tr>
   <tr>
      <th>Administration</th>
      <th>${adminEmployees.employeesCount}</th>
      <th>${adminEmployees.totalSalaray.toFixed(2)}</th>
      <th>${adminEmployees.avgSalary().toFixed(2)}</th>
   </tr>
   <tr>
      <th>Marketing</th>
      <th>${marketingEmployees.employeesCount}</th>
      <th>${marketingEmployees.totalSalaray.toFixed(2)}</th>
      <th>${marketingEmployees.avgSalary().toFixed(2)}</th>
   </tr>
   <tr>
      <th>Development</th>
      <th>${devEmployees.employeesCount}</th>
      <th>${devEmployees.totalSalaray.toFixed(2)}</th>
      <th>${devEmployees.avgSalary().toFixed(2)}</th>
   </tr>
   <tr>
      <th>Finance</th>
      <th>${finEmployees.employeesCount}</th>
      <th>${finEmployees.totalSalaray.toFixed(2)}</th>
      <th>${finEmployees.avgSalary().toFixed(2)}</th>
   </tr>
   <tr>
      <th>Total </th>
      <th>${allEmployees.employeesCount}</th>
      <th>${allEmployees.totalSalaray.toFixed(2)}</th>
      <th>${allEmployees.avgSalary().toFixed(2)}</th>
   </tr>
</table>`;
  mainDivAcc.appendChild(table);
}

rendermainTable();
