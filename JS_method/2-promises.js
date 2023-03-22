function character_name1(value){
    return new Promise((resolve,reject) =>{
        if(value == 'SHISUI UCHICHA'){
            resolve('u choosed 1st player');
        }else{
            reject('player name invalid');
        }
    })
}

function character_name2(value2){
    return new Promise((resolve,reject) =>{
        if(value2 == 'KENTO NANAMI'){
            resolve('u choosed 2nd player');
        }
    })
}

function character_choosed(value3){
    return new Promise((resolve,reject) =>{
        if(value3 == 'u choosed 1st player'){
            resolve('THE BODY FLICKER');
        }
    })
}

function character_choosed(value4){
    return new Promise((resolve,reject) =>{
        if(value4 == 'u choosed 2nd player'){
            resolve('GRADE 1 JS');
        }
    })
}
character_name2('KENTO NANAMI').then((message) =>{
    console.log(message);
    character_choosed(message).then((message2) =>{
        console.log(message2)
})
.catch((error) =>{
    console.log(error);
})
})
.catch((error) =>{
    console.log(error);
})
