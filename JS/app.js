let allEmployee = [];

function HrMangment (id , fullName, department, level, image ){
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image= image;

    allEmployee.push(this);
}


const employee1 = new HrMangment(1000,"Ghazi Samer",["Administration"],["Senior"],`../images/boy.png`);
const employee2 = new HrMangment(1001,"Lana Ali",["Finance"],["Senior"],`./images/girl.png`);
const employee3 = new HrMangment(1002,"Tamara Ayoub",["Marketing"],["Senior"],`./images/girl.png`);
const employee4 = new HrMangment(1003,"Safi Walid",["Administration"],["Mid-Senior"],`./images/boy.png`);
const employee5 = new HrMangment(1004,"Omar Zaid",["Development"],["Senior"],`./images/boy.png`);
const employee6 = new HrMangment(1005,"Rana Saleh",["Development"],["Junior"],`./images/girl.png`);
const employee7 = new HrMangment(1006,"Hadi Ahmad",["Finance"],["Mid-Senior"],`./images/boy.png`);


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

HrMangment.prototype.calculatingSalary = function (){
    if (this.level == "Senior"){
        this.salary = randomNum(1500, 2000);
    }else if (this.level == "Mid-Senior"){
        this.salary = randomNum(1000, 1500);
    }else if (this.level == "Junior"){
        this.salary = randomNum(500, 1000);
    }

    this.salary = this.salary - this.salary * 0.075;
}

for (let i =0 ; i< allEmployee.length; i++){
    allEmployee[i].calculatingSalary();
}


var getRandomId = function () {
    return Math.floor(Math.random() * (9000- 1000)) + 1000;
}

let employeeForm =document.getElementById("employeeForm");
employeeForm.addEventListener( "submit",ADD);

function ADD(event){
    event.preventDefault();
    let fullName =event.target.fullName.value;
    let department =event.target.department.value;
    let level =event.target.level.value;
    let image =event.target.image.value;

    let newEmployee = new HrMangment(getRandomId(), fullName,department,level,image);
    newEmployee.calculatingSalary();
    newEmployee.rendernew();
}

let emplooyesDiv =document.getElementById("emplooyes");
let recentlyEmployee =document.getElementById("recentlyEmployee");
let administrationDepartment =document.getElementById("administrationDepartment");
let marketingDepartment =document.getElementById("marketingDepartment");
let developmentDepartment =document.getElementById("developmentDepartment");
let financeDepartment =document.getElementById("financeDepartment");

HrMangment.prototype.rendernew = function(){
    let heading=document.createElement("p");
        heading.textContent="Name: "+this.fullName +", ID: "+this.id;
    let heading1=document.createElement("p");
        heading1.textContent="Depaertment: "+this.department +", Level: "+this.level;
    let heading2=document.createElement("p");
        heading2.textContent="Salary: "+this.salary;
    
    let images=document.createElement("img");
        images.setAttribute("src",this.image);
        images.setAttribute("width","150");
        images.setAttribute("height","150");

            emplooyesDiv.appendChild(recentlyEmployee);
            recentlyEmployee.appendChild(images);
            recentlyEmployee.appendChild(heading);
            recentlyEmployee.appendChild(heading1);
            recentlyEmployee.appendChild(heading2);
}
HrMangment.prototype.render = function(){
    let heading=document.createElement("p");
        heading.textContent="Name: "+this.fullName +", ID: "+this.id;
    let heading1=document.createElement("p");
        heading1.textContent="Depaertment: "+this.department +", Level: "+this.level;
    let heading2=document.createElement("p");
        heading2.textContent="Salary: "+this.salary;
    
    let images=document.createElement("img");
        images.setAttribute("src",this.image);
        images.setAttribute("width","150");
        images.setAttribute("height","150");

        

        if (this.department == "Administration"){
            emplooyesDiv.appendChild(administrationDepartment);
            administrationDepartment.appendChild(images);
            administrationDepartment.appendChild(heading);
            administrationDepartment.appendChild(heading1)
            administrationDepartment.appendChild(heading2)
        } else if (this.department == "Marketing"){
            emplooyesDiv.appendChild(marketingDepartment);
            marketingDepartment.appendChild(images);
            marketingDepartment.appendChild(heading);
            marketingDepartment.appendChild(heading1)
            marketingDepartment.appendChild(heading2)
        }else if (this.department == "Development"){
            emplooyesDiv.appendChild(developmentDepartment);
            developmentDepartment.appendChild(images);
            developmentDepartment.appendChild(heading);
            developmentDepartment.appendChild(heading1)
            developmentDepartment.appendChild(heading2)
        }else if (this.department == "Finance"){
            emplooyesDiv.appendChild(financeDepartment);
            financeDepartment.appendChild(images);
            financeDepartment.appendChild(heading);
            financeDepartment.appendChild(heading1)
            financeDepartment.appendChild(heading2)
        }else{
            emplooyesDiv.appendChild(recentlyEmployee);
            recentlyEmployee.appendChild(imageslist);
            recentlyEmployee.appendChild(heading);
            recentlyEmployee.appendChild(heading1)
            recentlyEmployee.appendChild(heading2)
        }
}

for (let i =0 ; i< allEmployee.length; i++){
    allEmployee[i].render();
}