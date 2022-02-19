let allEmployee = [];

function HrMangment (id , fullName, department, level, image ){
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image= image;

    allEmployee.push(this);
}


const employee1 = new HrMangment(1000,"Ghazi Samer",["Administration"],["Senior"],`./images/boy.jpg`);
const employee2 = new HrMangment(1001,"Lana Ali",["Finance"],["Senior"],`./images/girl.jpg`);
const employee3 = new HrMangment(1002,"Tamara Ayoub",["Marketing"],["Senior"],`./images/girl.jpg`);
const employee4 = new HrMangment(1003,"Safi Walid",["Administration"],["Mid-Senior"],`./images/boy.jpg`);
const employee5 = new HrMangment(1004,"Omar Zaid",["Development"],["Senior"],`./images/boy.jpg`);
const employee6 = new HrMangment(1005,"Rana Saleh",["Development"],["Junior"],`./images/girl.jpg`);
const employee7 = new HrMangment(1006,"Hadi Ahmad",["Finance"],["Mid-Senior"],`./images/boy.jpg`);


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

HrMangment.prototype.render = function(){
    document.write(`<p>My name is ${this.fullName} i work in this company and my salary is : $${this.salary}</p>`)
}

for (let i =0 ; i< allEmployee.length; i++){
    allEmployee[i].calculatingSalary();
}

for (let i =0 ; i< allEmployee.length; i++){
    allEmployee[i].render();
}
