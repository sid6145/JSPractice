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

// for a normal function 
// which is not a method in an object this refers 
// to the global object which is 
// window for browser and global for node
function testThis(){
    console.log(this);
}

testThis();