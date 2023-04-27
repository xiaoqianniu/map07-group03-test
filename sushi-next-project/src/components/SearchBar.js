import React from 'react'

const SearchBar = () => {
  const sortedByPrice = () => {
    console.log('sort')
  }

  const getSearchResult = () => {
    console.log('sort')
  }
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 d-flex align-items-center">
          <div className="col-lg-3">
            <div className="btn-group">
              <button id="sort-btn" type="button" onClick={sortedByPrice()}>
                <i className="fa fa-sort-asc" aria-hidden="true"></i>Price
                <span className="material-symbols-outlined">arrow_drop_up</span>
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="sushi-btn mx-2" onClick={getSearchResult()}>
              Search
            </button>
            <div className="input-group mx-2">
              <input
                type="text"
                name="search"
                id="search-field"
                placeholder="enter Sushi name"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
