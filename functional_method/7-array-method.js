// map string
const array = ['what','are', 'you', 'doing'];
var N_array = array.map(e=>{
    if(e == 'doing'){
        return e + ' Kishore';
    }else{
        return  e;
    }
})
console.log(array);
console.log(N_array);

// map number
const numbers = [1,2,3,12,45,98];
var N_list = numbers.map(e=>{
    if(e <= 10){
        return e + ' smallest';
    }else if(e >= 10){
        return e + ' biggest';
    }else{
        return e;
    }

})
console.log(numbers);
console.log(N_list);



// filter
// example1
var glo = ['##', 'rice', '##', 'sugar', '##', 'oil', '##', 'dal']
var N_glo = glo.filter(e =>{
    return  e !== '##';
})
console.log(N_glo);

// example2
const age = [18,20,30,48];
const checkage = age.filter(e=>{
    return e > 18;
})
console.log(checkage);



// reduce
var add = [0,5,0,5];
var output = add.reduce(function(n1,n2){
    return n1 + n2;
})
console.log(output);



// every
function anime(e){
    var check = /^[a-zA-Z]+$/;
    return check.test(e);
}
var list = ['naruto',10,'onepiece'];
var list2 = [2,3,6,8];
var taken = list.every(anime);
console.log(taken);

var taken2 = list2.every(anime);
console.log(taken2);



// some
var taken3 = list.some(anime);
console.log(taken3);
