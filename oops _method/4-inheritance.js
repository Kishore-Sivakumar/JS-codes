// base class
function employee(name, YOJ, salary){
    this.name = name,
    this.YOJ = YOJ,
    this.salary = salary
   }
   employee.prototype.in_line = function(){
    return `${this.name} has joined in ${this.YOJ} and his salary ${this.salary}`;
}

// child class
function Temp_employee(name, YOJ, salary, month){
    // inheriting base class object
    employee.call(this,name, YOJ, salary);
    this.month = month;
}

// inheriting base class prototype to child class 
Temp_employee.prototype = Object.create(employee.prototype);

// defining the child class
Temp_employee.prototype.getName = function(){
    return this.name
}

// inistating object to child class
const Temp_employee1 = new Temp_employee('Qwerts', 2020, '12k', 'jan');

Temp_employee.prototype.constructor = Temp_employee;

console.log(Temp_employee1.in_line());
// console.log(Temp_employee1.getName());
console.log(Temp_employee1);
