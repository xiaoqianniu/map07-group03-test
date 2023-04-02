// search by card-title
function getSearchResult(query) {
  var xhr = new XMLHttpRequest()
  var cards = document.querySelectorAll('.card')
  xhr.onload = function () {
    if (xhr.status === 200) {
      var results = JSON.parse(xhr.responseText)
      console.log(results)
      for (var i = 0; i < cards.length; i++) {
        var title = cards[i]
          .querySelector('.card-title')
          .textContent.toLowerCase()
        var match = title.includes(query)
        cards[i].style.display = match ? 'block' : 'none'
      }
    } else {
      alert('reqquest fail')
    }
  }
  xhr.open('GET', 'http://www.boredapi.com/api/activity')
  xhr.send()
}

document
  .getElementById('search-field')
  .addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      var query = document.getElementById('search-field').value.toLowerCase()
      getSearchResult(query)
    }
  })

// Dongguo start

//
function showList(list) {
  for (const item of list) {
    let element = document.createElement('div')
    element.classList.add('card')
    element.classList.add('col-sm-12')
    element.classList.add('col-md-5')
    element.classList.add('col-lg-3')
    element.innerHTML = `<div id="card-{item.id}" style="width: 18rem" key={item.id}>
			<h4 class="card-title">${item.title}</h4>
			<img src="${item.image}" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">${item.subtitle}</h5>
				<p class="card-text">${item.description}</p>
				<div class="card-price-btn">
					<p id="card-price">${item.price}</p>
					<button class="btn">Order a Sushi</button>
				</div>
			</div>
		</div>`
    addItem(element)
  }
}

function addItem(item) {
  let container = document.getElementById('item-container')
  container.appendChild(item)
}

$(document).ready(function () {
  fetch('data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // Do something with the array of objects
      console.log(data)

      showList(data.list)
    })
    .catch((error) => console.error(error))
})

// Dongguo end

// //sort based on price
// let sortedAsc = true;
// const cardsContainer = document.querySelector('.card-container');
// const cardsSection1 = document.querySelector('.cards-section1');
// const cardsSection2 = document.querySelector('.cards-section2');

// function sortBtn() {
//   console.log("hello");
//   // Get all the cards in the container
//   let cards = Array.from(cardsContainer.querySelectorAll('.card'));

//   // Filter cards into two sections
//   const cardsInSection1 = cards.filter(card => card.parentElement === cardsSection1);
//   const cardsInSection2 = cards.filter(card => card.parentElement === cardsSection2);
// debugger;
//   // Sort cards in each section
//   cardsInSection1.sort((a, b) => {
//     const priceA = parseInt(a.querySelector('.card-price').textContent.slice(1));
//     const priceB = parseInt(b.querySelector('.card-price').textContent.slice(1));
//     return priceA - priceB;
//   });

//   cardsInSection2.sort((a, b) => {
//     const priceA = parseInt(a.querySelector('.card-price').textContent.slice(1));
//     const priceB = parseInt(b.querySelector('.card-price').textContent.slice(1));
//     return priceA - priceB;
//   });

//   // Reorder cards in the container based on the sorted sections
//   if (sortedAsc) {
//     console.log("sortASC")
//     cardsContainer.innerHTML = '';
//     cardsContainer.append(...cardsInSection1, ...cardsInSection2);
//   } else {
//     cardsContainer.innerHTML = '';
//     cardsContainer.append(...cardsInSection2, ...cardsInSection1);
//   }

//   sortedAsc = !sortedAsc;
// }

// document.getElementById('sort-btn').addEventListener('click', sortBtn);

// chrome.runtime.sendMessage({type: "my_message"}, function(response) {
//   console.log("Message sent successfully!");
// }, 5000);
