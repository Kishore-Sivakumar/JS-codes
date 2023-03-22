// base class
class employee{
    constructor(name, YOJ, salary){
        this.name = name,
        this.YOJ = YOJ,
        this.salary = salary
        }
    in_line = function(){
        return `${this.name} has joined in ${this.YOJ} and his salary ${this.salary}`;
    }
}

// sub-class
class Temp_employee extends employee{
    constructor (name, YOJ,salary,month){
        // calling the base class
        super(name,YOJ,salary);
        this.month = month;
    }
}

const Temp_employee1 = new Temp_employee('Qwerts', 2020, '12k', 'jan');
console.log(Temp_employee1.in_line());
