// function func1(num){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let error = false
//             if(num > 5){
//              console.log("hello")
//              resolve();
//             }else{
//                 error = true
//             }
            
//             if(error = true){
//             reject()
//             }
//         },3000);
//     });
// };

// func1(4).then(function(){
//     console.log("awesome the promised got resoleved")
// }).catch(function(){
//     console.log("this is bad ")
// })


function func2(num){

    return new Promise(function(resolve, reject){
        if(num % 2 == 0 ){
            console.log("is even")
            resolve();
        }else{
            reject();
        }
    });
}



func2(3).then(function(){
    console.log("thats great the number is even")
}).catch(function(){
    console.log("its not even")
})



















