let mydate=new Date()

console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(typeof mydate)

let createddate =new Date(2023,4,21)
console.log(createddate.toDateString())
console.log(createddate.toLocaleDateString())


let timestamp=Date.now()

console.log(timestamp)