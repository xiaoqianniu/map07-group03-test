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
