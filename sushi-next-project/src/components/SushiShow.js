import React, { useState, useEffect } from 'react'
import SearchBar from './SushiSearch'
import SushiList from './sushiList'

function SushiShow() {
  const [list, setList] = useState([])
  const [asc, setAsc] = useState(false)

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

  const sortByPrice = () => {
    if (asc) {
      const sortedByPrice = list.sort((a, b) => {
        const priceA = parseFloat(a.price)
        const priceB = parseFloat(b.price)
        return priceA - priceB
      })
      setList(sortedByPrice)
      console.log(list.map((i) => i.price))
      setAsc(false)
    } else {
      const sortedByPrice = list.sort((a, b) => {
        const priceA = parseFloat(a.price)
        const priceB = parseFloat(b.price)
        return priceB - priceA
      })
      setList(sortedByPrice)
      console.log(list.map((i) => i.price))
      setAsc(true)
    }
  }

  const searchByTitle = (queryStr) => {
    const fetchData = async (queryStr) => {
      const response = await fetch(serverUrl)
      const data = await response.json()
      const list = covertSushiList(data)
      if (queryStr) {
        const matedList = list.filter(
          (sushi) =>
            sushi.title.toLowerCase().indexOf(queryStr.toLowerCase()) !== -1
        )
        setList(matedList)
      } else {
        setList(list)
      }
    }
    fetchData(queryStr)
  }

  return (
    <>
      <SearchBar sort={sortByPrice} search={searchByTitle} />
      <SushiList list={list} />
    </>
  )
}

export default SushiShow
