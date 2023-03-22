function add(a,b,c1){
    c1(a+b);
}
function sub(a,b,c2){
    c2(a-b);
}
function multiple(a,b,input,c3){
    c3(a*b*input);
}
function divide(a,input,c4){
    c4(a/input);
}
add(5,5,(output1) =>{                                        
    console.log(output1); 
    sub(40,10,(output2) =>{                                  
        console.log(output2);
        multiple(2,2,output2,(output3) =>{                   
            console.log(output3);
            divide(100,output3,(output4) =>{                  
                console.log(output4);
            })
        })
    })
})
