

const a = ['abc', 'bcd', 'cde', 'dfg'];
const b = ['zxy', 'wzs', 'bcd', 'bxs', 'qwr'];
const c = [];


const test = function(arr1, arr2){
    arr1.forEach(e=>{
        arr2.forEach(y=>{
            if(e===y){
                console.log('not match')
            }
        })
        c.push(e)
    })
}


test(a,b)
console.log(c)


