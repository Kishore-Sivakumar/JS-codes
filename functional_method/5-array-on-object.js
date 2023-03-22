//Function array on Object 
const my_carsBikes = [
    {   
        brand : 'MAHINDRA',
        model : 'XUV500',
        price : 1500000,
        more_info :{
            MILEAGE_KMPL : 16,
        },
    },
    {
        brand : 'YAMAHA',
        model : 'RX100',
        price : 100000,
        more_info :{
            MILEAGE_KMPL : 35,
        },
    },
    {
        brand : 'ROYAL ENFIELD',
        model : 'METEOR 350',
        price : 200000,
        more_info:{
            MILEAGE_KMPL : 35,
        },
    },
    {
        brand : 'FORD',
        model : 'FREESTYLE',
        price : 900000,
        more_info:
        {
            MILEAGE_KMPL : 24,
        },
    }
]

console.log(my_carsBikes);

for(let i = 0; i<my_carsBikes; i++){
    console.log(my_carsBikes[i].model + " " + my_carsBikes[i].price);
}
my_carsBikes.forEach(e =>{
    console.log(e.model + " " + e.price);
})
