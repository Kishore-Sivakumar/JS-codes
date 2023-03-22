// constructor
function employee(name, YOE, salary){
    this.name = name,
    this.YOE = YOE,
    this.salary = salary
    this.in_line = function(){
        return `${this.name} has experience of ${this.YOE} years and ${this.salary} salary`;
    }
}
const employee1 = new employee('Kishore', 10, '30k');
const employee2 = new employee('Abirami', 2004, '25k');
const employee3 = new employee('Emarold', 6, '10k');
console.log(employee1.in_line());
console.log(employee1);
