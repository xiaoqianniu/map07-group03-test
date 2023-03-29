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

function multiplyClicked() {
  var n1 = document.getElementById('number1').value
  var n2 = document.getElementById('number2').value
  document.getElementById('result').innerHTML = n1 * n2
}

function divideClicked() {
  var n1 = document.getElementById('number1').value
  var n2 = document.getElementById('number2').value
  document.getElementById('result').innerHTML = n1 / n2
}
