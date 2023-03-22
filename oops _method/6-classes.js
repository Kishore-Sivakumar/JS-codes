class employee{
constructor(name, YOJ, salary){
    this.name = name,
    this.YOJ = YOJ,
    this.salary = salary
    }
in_line = function(){
    return `${this.name} has joined in ${this.YOJ} and his salary ${this.salary}`;
}
getYearsOld = function(){
        let years = new Date().getFullYear() - this.YOJ;
    return `${this.name} his age is ${years} years old`;
    }
revise(newYear){
    this.YOJ = newYear;
    this.revised = true;
}

// static 
static bestEmployee(){
    return 'Someone';
}
}
const employee1 = new employee('Abirami', 2004, '25k');
console.log(employee1.in_line());
console.log(employee1.getYearsOld());
employee1.revise('2001');
// console.log(employee.bestEmployee());
// console.log(employee1.hasOwnProperty('name'));
console.log(employee1);
