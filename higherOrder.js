const array = [1,2,3,4,5,6,7,8,9,10]

const newArray = array.map((current) => {
    return current * 2;
})

console.log(newArray)

const array1 = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = array1.filter((current) => {
    return current % 2 === 0;
})

console.log(evenNumbers);


// reduce returns a singular IDBCursorWithValue, accumulator always start with the first value of the array
const array2 = [1,2,3,4,5,6,7,8,9,10]

const sum = array2.reduce((accumulator, current)=>{
    return accumulator + current;
})

console.log(sum);