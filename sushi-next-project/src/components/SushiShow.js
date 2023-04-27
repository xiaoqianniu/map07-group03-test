import React, { useState, useEffect, useCallback } from 'react'
import SearchBar from './SushiSearch'
import SushiList from './sushiList'

function SushiShow() {
  const [list, setList] = useState([])
  const [asc, setAsc] = useState(false)

  const [originalList, setOriginalList] = useState(list)

  const serverUrl = '/api/sushi'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(serverUrl)
      const data = await response.json()
      const array = covertSushiList(data)
      setList(array)
      setOriginalList(array)
    }

    if (originalList.length >= 1) {
      setList(originalList)
    } else {
      fetchData()
    }
  }, [originalList])

  const sortByPrice = useCallback(() => {
    const sortedByPrice = list.slice().sort((a, b) => {
      const priceA = parseFloat(a.price)
      const priceB = parseFloat(b.price)
      return asc ? priceA - priceB : priceB - priceA
    })
    setList(sortedByPrice)
    setAsc(!asc)
  }, [list, asc])

  const searchByTitle = useCallback(
    (queryStr) => {
      const matedList = originalList.filter(
        (sushi) =>
          sushi.title.toLowerCase().indexOf(queryStr.toLowerCase()) !== -1
      )
      setList(matedList)
    },
    [originalList]
  )

  const covertSushiList = (data) => {
    const array = []
    for (const item of data) {
      array.push({
        id: item.catalogSectionUUID,
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
    <>
      <SearchBar sort={sortByPrice} search={searchByTitle} />
      <SushiList list={list} />
    </>
  )
}

export default SushiShow
