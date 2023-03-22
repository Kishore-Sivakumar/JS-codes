// reversing the string
const str = 'String';
const reverse_String = (str = '') => {
    let reverse = '';
    const { length: len } = str;
    for(let i = len-1; i>=0; i--){
        reverse += str[i];
    };
    return reverse;    
};
console.log(reverse_String(str));



// reversing the numbers
let numbers = 987654321;
let output = 0;
while(numbers>0){
    result = numbers%10;                98765432.1
    output = output*10 + result;        0 + 98765432.1 - 98765432.1 
    // converts the float into decimal in nearst value
    numbers = Math.floor(numbers/10);   98765432.1 
}
console.log('reversed numbers is: ' + output);
