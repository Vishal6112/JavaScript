
const arr=[0,1,2,3,4,5]

// arr.push(6)
// arr.pop()


// arr.unshift(9)
// arr.shift()

const arr1=arr.slice(1,3)
// console.log(" Original array:",arr)
// console.log("Slice Generated New Array:",arr1)

// console.log("**********************")
// console.log("After Splice operation")
// const arr2=arr.splice(1,3)

// console.log("Splice Generated New Array:",arr2)
// console.log(" Original array:",arr)

let arr3=arr.concat(arr1)
// console.log(arr3)


// console.log(arr.includes(5))

// console.log(arr.indexOf(5))

// console.log(arr3.indexOf(2,3))

//pushing one array in anoter array
const name=['abc','pqr','xyz']
const name1=['lmn','mno']
// name.push(name1)
// console.log(name)


// const nameres=name.concat(name1)
// console.log(nameres)

//spread method

const allname=[...name,...name1]
// console.log(allname)

const newarray = [1,2,3,[4,5],[6,7,[8,9,[10,11]]]]

 const a1=newarray.flat(Infinity)
 console.log(a1)