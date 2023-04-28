// const sushiServer = 'https://dongguo.xyz/api/sushi'
const sushiServer = '@/../data/ubereats.json'
const imageServer = 'https://dongguo.xyz/api/images'

function getSearchResult(query) {
  var cards = document.querySelectorAll('.card')
  fetch(sushiServer)
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < cards.length; i++) {
        var title = cards[i]
          .querySelector('.card-title')
          .textContent.toLowerCase()
        // var match = title.includes(query)
        var match = title.indexOf(query) !== -1
        cards[i].style.display = match ? 'block' : 'none'
      }
    })
    .catch((error) => console.error(error))
}

// when hit the enter key will execute the search, do not need to click the search button
document
  .getElementById('search-field')
  .addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      var query = document.getElementById('search-field').value.toLowerCase()
      getSearchResult(query)
    }
  })

// dynamic adding cards/Items
function showList(list, containerId) {
  const container = document.getElementById(containerId)
  container.innerHTML = '' // clear previous contents of container
  for (const item of list) {
    // Image
    var imageUrl = item.image

    let element = document.createElement('div')
    element.classList.add('card')
    element.classList.add('col-sm-12')
    element.classList.add('col-md-5')
    element.classList.add('col-lg-3')
    element.classList.add('mx-auto')
    element.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.3)' // add box-showdow here
    element.innerHTML = `<div id="card-{item.id}" style="width: 18rem" key={item.id}>
			<h4 class="card-title text-center">${item.title}</h4>
			<img src="${imageUrl}" class="card-img-top mx-auto d-block" alt="..." />
			<div class="card-body">
				<p class="card-description">${item.description}</p>
				<div class="card-price-btn">
					<p id="card-price">$ ${item.price / 100}</p>
					<div class="input-group">
            <button class="sushi-btn" type="button" id="button-minus">-</button>
            <input type="text" id="quantity-input" class="order-control text-center" value="1" aria-label="Quantity" aria-describedby="button-minus button-plus">
            <button class="sushi-btn" type="button" id="button-plus">+</button>
          </div>
          <button type="submit" class="sushi-btn go-btn">Go</button>
				</div>
			</div>
		</div>`
    addItem(element, containerId)
  }
}

function addItem(item, containerId) {
  let container = document.getElementById(containerId)
  container.appendChild(item)
}

//Wait until the document has finished loading.
//Fetch data from a JSON file called data.json.
//Parse the JSON response into a JavaScript object.
$(document).ready(function () {
  fetch(sushiServer)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.list)
      // const list = data.list.filter((sushi) => {
      //   return sushi.category !== 'Blossom'
      // })
      // const blossom = data.list.filter((sushi) => {
      //   return sushi.category === 'Blossom'
      // })
      console.log(data)
      const list = []
      const blossom = []
      for (const item of data) {
        list.push({
          id: item['payload.standardItemsPayload.catalogItems[0].uuid'],
          title: item['payload.standardItemsPayload.catalogItems[0].title'],
          image: item['payload.standardItemsPayload.catalogItems[0].imageUrl'],
          subtitle: item['payload.standardItemsPayload.catalogItems[0].title'],
          description:
            item[
              'payload.standardItemsPayload.catalogItems[0].itemDescription'
            ],
          price: item['payload.standardItemsPayload.catalogItems[0].price'],
        })
      }

      console.log(list)

      showList(list, 'item-container')
      showList(blossom, 'blossom-container')
      document
        .getElementById('button-plus')
        .addEventListener('click', orderSushi)
    })
    .catch((error) => console.error(error))
})

function sortedByPrice() {
  $(document).ready(function () {
    fetch(sushiServer)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const sortedCardsOne = data.list.slice().sort((a, b) => {
          const priceA = parseFloat(a.price)
          const priceB = parseFloat(b.price)
          return priceA - priceB
        })
        // const sortedCardsTwo = data.blossom.slice().sort((a, b) => {
        //   const priceA = parseFloat(a.price.replace('$', ''))
        //   const priceB = parseFloat(b.price.replace('$', ''))
        //   return priceA - priceB
        // })
        showList(sortedCardsOne, 'item-container')
        // showList(sortedCardsTwo, 'blossom-container')
      })
      .catch((error) => console.error(error))
  })
}

function orderSushi() {
  const minusBtns = document.querySelectorAll('#button-minus')
  const plusBtns = document.querySelectorAll('#button-plus')
  const quantityInputs = document.querySelectorAll('.order-control')
  const goButton = document.querySelectorAll('.go-btn')

  // Add event listeners to each button
  for (let i = 0; i < minusBtns.length; i++) {
    let quantity = 1
    minusBtns[i].addEventListener('click', () => {
      if (quantity > 1) {
        quantity--
        quantityInputs[i].value = quantity
        plusBtns[i].disabled = false // enable the plus button
      }
      if (quantity === 1) {
        minusBtns[i].disabled = true // disable the minus button
      }
    })

    plusBtns[i].addEventListener('click', () => {
      if (quantity < 10) {
        // maximum quantity allowed is 10
        quantity++
        quantityInputs[i].value = quantity
        minusBtns[i].disabled = false // enable the minus button
      }
      if (quantity === 10) {
        plusBtns[i].disabled = true // disable the plus button
      }
    })
  }

  // Add event listener to all the "Go" buttons
  for (let i = 0; i < goButton.length; i++) {
    goButton[i].addEventListener('click', (event) => {
      cartItemCount(event)
    })
  }
}

window.onload = () => {
  orderSushi()
}

let cart = []
function cartItemCount(event) {
  const quantityInput =
    event.target.parentElement.querySelector('.order-control')
  const quantity = parseInt(quantityInput.value)
  const currentItemIndex = cart.findIndex((item) => item.added === false)
  if (currentItemIndex !== -1) {
    cart[currentItemIndex].quantity = quantity
    cart[currentItemIndex].added = true
  } else {
    cart.push({ quantity, added: true })
  }
  // Get the shopping cart element
  const shoppingCart = document.getElementById('shopping-cart')
  if (shoppingCart) {
    // Count the total quantity of items in the cart
    let totalQuantity = 0
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].added) {
        totalQuantity += cart[i].quantity
      }
    }
    // Update the notification on the navbar
    if (totalQuantity > 0) {
      shoppingCart.innerHTML = `<i class="fa fa-shopping-cart cart-icon"></i> ${totalQuantity}`
    } else {
      shoppingCart.innerHTML = `<i class="fa fa-shopping-cart"></i>`
    }
  }
}
function goButtonClicked() {
  // Mark all items in the cart as added
  for (let i = 0; i < cart.length; i++) {
    cart[i].added = true
  }
}

// current weather on navbar
const apiKey = 'eb62ebbe6ef242872de1d5'
const city = 'Montreal'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

function displayWeather(response) {
  const weatherData = response.weather[0]
  const temperature = Math.round(response.main.temp - 273.15)
  const icon = `http://openweathermap.org/img/w/${weatherData.icon}.png`
  const weatherElement = document.createElement('div')
  weatherElement.innerHTML = `<img src="${icon}" alt="${weatherData.description}"> ${temperature}°C`
  const navbar = document.querySelector('.navbar')
  navbar.appendChild(weatherElement)
}

function getWeather() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then(displayWeather)
}

// getWeather()
