// search by card-title
// function getSearchResult(query) {
//   var xhr = new XMLHttpRequest()
//   var cards = document.querySelectorAll('.card')
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       var results = JSON.parse(xhr.responseText)
//       console.log(results)
//       for (var i = 0; i < cards.length; i++) {
//         var title = cards[i]
//           .querySelector('.card-title')
//           .textContent.toLowerCase()
//         var match = title.includes(query)
//         cards[i].style.display = match ? 'block' : 'none'
//       }
//     } else {
//       alert('reqquest fail')
//     }
//   }
//   xhr.open('GET', 'http://www.boredapi.com/api/activity')
//   xhr.send()
// }
function getSearchResult(query) {
  var cards = document.querySelectorAll('.card')
  fetch('data/data.json')
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
document.getElementById('search-field').addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      var query = document.getElementById('search-field').value.toLowerCase()
      getSearchResult(query)
    }
  })
  
// Dongguo start

// dynamic adding cards/Items
function showList(list,containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // clear previous contents of container
  for (const item of list) {
    let element = document.createElement('div')
    element.classList.add('card')
    element.classList.add('col-sm-12')
    element.classList.add('col-md-5')
    element.classList.add('col-lg-3')
    element.classList.add('mx-auto')
    element.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.3)'// add box-showdow here
    element.innerHTML = `<div id="card-{item.id}" style="width: 18rem" key={item.id}>
			<h4 class="card-title text-center">${item.title}</h4>
			<img src="${item.image}" class="card-img-top mx-auto d-block" alt="..." />
			<div class="card-body">
				<h5 class="card-subtitle">${item.subtitle}</h5>
				<p class="card-description">${item.description}</p>
				<div class="card-price-btn">
					<p id="card-price">${item.price}</p>
					<button class="btn">Order a Sushi</button>
				</div>
			</div>
		</div>`
    addItem(element,containerId)
  }
}

function addItem(item,containerId) {
  let container = document.getElementById(containerId)
  container.appendChild(item)
}
//Wait until the document has finished loading.
//Fetch data from a JSON file called data.json.
//Parse the JSON response into a JavaScript object.
$(document).ready(function () {
  fetch('data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // Do something with the array of objects
      console.log(data)
      const list = data.list;
      const blossom = data.blossom;
      showList(list, 'item-container');
      showList(blossom, 'blossom-container');
    })
    .catch((error) => console.error(error))
})

function sortedByPrice() {
  $(document).ready(function () {
    console.log("hello");
    debugger;
  fetch('data/data.json')
  .then((response) => response.json())
  .then((data) => {
    const sortedCardsOne = data.list.slice().sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return priceA - priceB;
    });
    const sortedCardsTwo = data.blossom.slice().sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return priceA - priceB;
    });
    showList(sortedCardsOne, 'item-container');
    showList(sortedCardsTwo, 'blossom-container');
  })
  .catch((error) => console.error(error))
})
}

