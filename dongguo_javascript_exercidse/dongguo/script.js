function checkPrime() {
  let n = document.getElementById('checkPrimeButton').value
  document.getElementById('primeMsg').innerHTML = isPrime(n)
    ? n + ' is a prime'
    : n + ' is not a prime'
}

function isPrime(n) {
  if (n === 1) {
    return false
  }
  if (n === 2) {
    return true
  }

  for (var x = 2; x < n; x++) {
    if (n % x === 0) {
      return false
    }
    return true
  }
}

var users = []
class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
}

function register() {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  users.push(new User(email, password))
  console.table(users)
  console.log('register')
}

function printFibonacci(n) {
  let fibs = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibs[i] = fibs[i - 2] + fibs[i - 1]
  }

  console.table(fibs)
}

function fib(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 2) + fib(n - 1)
}

function submitClicked() {
  var age = document.getElementById('myNumber').value
  document.getElementById('msg').innerHTML = 'Your age is: ' + age
}

function numberChanging() {
  var age = document.getElementById('myNumber').value
  console.log('age...' + age)
}

function numberChanged() {
  var age = document.getElementById('myNumber').value
  console.log('age :' + age)
}

function addClicked() {
  var n1 = document.getElementById('number1').value
  var n2 = document.getElementById('number2').value
  document.getElementById('result').innerHTML = Number(n1) + Number(n2)
}

function subtractClicked() {
  var n1 = document.getElementById('number1').value
  var n2 = document.getElementById('number2').value
  document.getElementById('result').innerHTML = n1 - n2
}

function multiplyClicked() {
  var n1 = document.getElementById('number1').value
  var n2 = document.getElementById('number2').value
  document.getElementById('result').innerHTML = n1 * n2
}

function divideClicked() {
  var n1 = document.getElementById('number1').value
  var n2 = document.getElementById('number2').value
  if (n2 === '0') {
    document.getElementById('result').innerHTML = '0 can not be divided'
    return
  }
  document.getElementById('result').innerHTML = n1 / n2
}
