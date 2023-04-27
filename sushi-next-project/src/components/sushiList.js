import React, { useState, useEffect } from 'react'
import SushiCard from './sushiCard'

import PropTypes from 'prop-types'

function SushiList() {
  const [list, setList] = useState([])

  const serverUrl = '/api/sushi'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(serverUrl)
      const data = await response.json()
      const list = covertSushiList(data)
      setList(list)
    }
    fetchData()
  }, [])

  const covertSushiList = (data) => {
    const array = []
    for (const item of data) {
      array.push({
        id: item['catalogSectionUUID'],
        title: item['payload.standardItemsPayload.catalogItems[0].title'],
        image: item['payload.standardItemsPayload.catalogItems[0].imageUrl'],
        subtitle: item['payload.standardItemsPayload.catalogItems[0].title'],
        description:
          item['payload.standardItemsPayload.catalogItems[0].itemDescription'],
        price: item['payload.standardItemsPayload.catalogItems[0].price'],
      })
    }
    return array
  }

  return (
    <div className="container">
      <div className="card-container cards-section1 mt-4">
        <h3 className="font-weight-bold mb-4"></h3>
        <div id="item-container" className="row">
          {list.map((item) => (
            <SushiCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

SushiList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
}

export default SushiList
