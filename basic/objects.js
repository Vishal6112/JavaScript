
const mysym=Symbol("key1")
const JsUser={
    name:"vishal",
    age:22,
    email:"abc@gmail.com",
    isloggedIn:false,
    [mysym]:"key1"
}

console.log(JsUser.age)
console.log(JsUser["email"])

JsUser.age=21
console.log(JsUser.age)

Object.freeze(JsUser)

JsUser.email="xyz@google.com"
console.log(JsUser["email"])

console.log(JsUser)

const obj1={1:"a",2:"b"}
const obj2={2:"c",3:"d"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)