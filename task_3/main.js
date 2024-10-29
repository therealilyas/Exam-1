const array = [2,2,1]
    
    
let getNum = array.filter((i) => {
    array.indexOf(i) === array.lastIndexOf(i)
});

    
console.log(getNum)
