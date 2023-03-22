const employee = {
    in_line: function(){
        return `${this.name} has joined in ${this.YOJ} and his salary ${this.salary}`;
   },
   getAge: function(){
    const years = new Date(). getFullYear() - this.YOJ;
    return `${this.name} is ${years} years old`;
   }
}

// 1st type
const employee1 = Object.create(employee);
employee1.name = 'Kishore';
employee1.YOJ = 2000;
employee1.salary = '30k';
console.log(employee1);
console.log(employee1.YOJ);
console.log(employee1.getAge());

// 2nd type
const employee2 = Object.create(employee, {
    name: {value: 'Emarold'},
    YOJ: {value: '2012'},
    salary: {value: '25k'},
})
console.log(employee2);
console.log(employee2.YOJ);
console.log(employee2.getAge());
