function func1(num){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false
            if(num > 5){
             console.log("hello")
             resolve();
            }else{
                error = true
            }
            
            if(error = true){
            reject()
            }
        },3000);
    });
};

func1(4).then(function(){
    console.log("awesome the promised got resoleved")
}).catch(function(){
    console.log("this is bad ")
})