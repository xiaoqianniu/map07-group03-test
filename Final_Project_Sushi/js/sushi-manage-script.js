var addSushiButton
var title
$(document).ready(function () {
  addSushiButton = document.getElementById('add-sushi-button')
  addSushiButton.disabled = true
})

var imageId = null
var el = document.getElementById('file')
el.addEventListener('change', function (e) {
  console.log(this)
  console.log(e.target)
  let files = e.target.files
  console.log(files)
  if (!files.length) return

  file = files[0]
  previewFile(files[0])
  formData = new FormData()
  formData.append('name', 'name')
  formData.append('description', 'name')
  formData.append('file', files[0], files[0].name)
  console.log(formData)
  axios({
    method: 'post',
    // url: 'http://localhost:8080/images',
    url: 'http://dongguo.xyz:8080/images',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      console.log(response)
      imageId = response.data.id
      addSushiButton.disabled = false
      console.log(imageId)
    })
    .catch(function (response) {
      console.log(response)
    })
})

function previewFile(file) {
  let reader
  if (file) {
    reader = new FileReader()
    reader.readAsDataURL(file)
  }
  reader.onload = function (e) {
    document.getElementById('img-preview').src = e.target.result
  }
}

function addSushi() {
  const title = document.getElementById('title').value
  const subTitle = document.getElementById('subTitle').value
  const price = document.getElementById('price').value
  const description = document.getElementById('description').value
  console.log(title, subTitle, price, description, imageId)

  // Post
  const data = {
    title,
    subTitle,
    price,
    description,
    imageId: 16,
  }

  console.log(data)
  axios({
    method: 'post',
    // url: 'http://localhost:8080/sushi',
    url: 'http://dongguo.xyz:8080/sushi',
    data,
  })
    .then(function (response) {
      console.log(response)
      imageId = response.data.id
      console.log(imageId)
      $('#message-modal').modal('show')
    })
    .catch(function (response) {
      console.log(response)
    })
}
