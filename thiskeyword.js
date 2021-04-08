// this keyword references to the object which is executing the method 
let car = {
    brand : "toyota",
    type:"sedan",
    color:"white",
    fuelType:"petrol",
    drive: function(){
        console.log(this);
    }
}

car.drive();


function testThis(){
    console.log(this);
}

testThis();