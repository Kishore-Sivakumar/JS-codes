// sample
// console.log('hello');



//object literals
var users = {
    title: 'Mr.',
    fullname: 'Kishore',
    role: 'beginner',
    details: function(){
        return `${this.title} ${this.fullname} ${this.role} "requested to login"`;
    }
}
console.log(users);

// example
// object literals just print what in return after calling the function
// var users = {
//     title: 'Mr.',
//     fullname: 'Kishore',
//     role: 'beginner',
//     details: function(){
//         return(this.title + this.fullname + this.role + "requested to login");
//     }
// }
// console.log(users.details());
