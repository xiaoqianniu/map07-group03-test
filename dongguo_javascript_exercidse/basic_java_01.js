let myObj = {
  name: 'Silviya',
  age: function () {
    return 5
  },
}

console.log(myObj.name)
console.log(myObj.age())

// array

let array = []
console.log(array.length)
console.log(array)

array = ['yellow', 10, false]
console.log(array.length)
console.log(array)

//function

function f(age) {
  debugger
  console.log('age is: ' + age)
}

let f2 = (age) => {
  console.log('another fucntion \n')
  console.log('age is : ' + age)
}

f(5)
f2(50)
