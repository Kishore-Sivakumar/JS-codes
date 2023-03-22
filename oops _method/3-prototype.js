function employee(name, YOJ, salary){
    this.name = name,
    this.YOJ = YOJ,
    this.salary = salary
   }
   employee.prototype.in_line = function(){
    return `${this.name} has joined in ${this.YOJ} and his salary ${this.salary}`;
}
employee.prototype.getYearsOld = function(){
    let years = new Date().getFullYear() - this.YOJ;
    return `${this.name} his age is ${years} years old`;
}
employee.prototype.revise = function(newYear){
    this.YOJ = newYear;
    this.revised = true;
}
const employee1 = new employee('Kishore', 2000, '30k');
const employee2 = new employee('Abirami', 2004, '25k');
const employee3 = new employee('Emarold', 2012, '10k');

console.log(employee2.in_line());
console.log(employee2.getYearsOld());
employee1.revise('2001');
console.log(employee2);
