function SushiList() {
  const array = [
    {
      id: 1,
      title: 'California',
      image: '/images/Sushi_1.jpg',
      subtitle: 'Japan found itself in midst',
      'card-text': 'the rice and fish reduced the time to about one month',
      price: '$7',
      button: 'Order a sushi',
    },
    {
      id: 2,
      title: 'Ca',
      image: '/images/Sushi_1.jpg',
      subtitle: 'Japan found itself in midst',
      'card-text': 'the rice and fish reduced the time to about one month',
      price: '$10',
      button: 'Order a sushi',
    },
    {
      id: 3,
      title: 'Caornia',
      image: '/images/Sushi_1.jpg',
      subtitle: 'Japan found itself in midst',
      'card-text': 'the rice and fish reduced the time to about one month',
      price: '$15',
      button: 'Order a sushi',
    },
    {
      id: 4,
      title: 'ornia',
      image: '/images/Sushi_1.jpg',
      subtitle: 'Japan found itself in midst',
      'card-text': 'the rice and fish reduced the time to about one month',
      price: '$12',
      button: 'Order a sushi',
    },
    {
      id: 5,
      title: 'California',
      image: '/images/Sushi_1.jpg',
      subtitle: 'Japan found itself in midst',
      'card-text': 'the rice and fish reduced the time to about one month',
      price: '$13',
      button: 'Order a sushi',
    },
    {
      id: 6,
      title: 'California',
      image: '/images/Sushi_1.jpg',
      subtitle: 'Japan found itself in midst',
      'card-text': 'the rice and fish reduced the time to about one month',
      price: '$8',
      button: 'Order a sushi',
    },
  ]

  const list = array.map((item) => (
    <div
      id='card-one'
      className='col-xs-12 col-sm-6 col-md-3 col-lg-3'
      key={item.id}
    >
      <h4 className='card-title'>{item.title}</h4>
      <img src='/images/Sushi_1.jpg' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Japan found itself in midst</h5>
        <p className='card-text'>
          the rice and fish reduced the time to about one month
        </p>
        <div className='card-price-btn'>
          <p id='card-price'>$7</p>
          <button className='sushi-btn'>Order a Sushi</button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className='List'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-lg-5 d-flex align-items-center'>
          <div className='col-lg-3'>
            <div className='btn-group'>
              <button id='sort-btn' type='button'>
                <i className='fa fa-sort-asc' aria-hidden='true'></i>Sort By
                Price
              </button>
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <button className='btn'>Search</button>
            <div className='input-group'>
              <input
                type='text'
                name='search'
                id='search-field'
                placeholder='enter Sushi name'
                className='form-control'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='card-container cards-section1 mx-auto mt-4'>
        <h3 className='font-weight-bold mb-4'>SUMOMAKI</h3>
        <div id='item-container' className='row'>
          {list}
        </div>
      </div>
    </div>
  )
}

export default SushiList
