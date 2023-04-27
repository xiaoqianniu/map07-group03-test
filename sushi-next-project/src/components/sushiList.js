import React from 'react'
import SushiCard from './sushiCard'

import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap'

function SushiList(props) {
  const { list = [] } = props
  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {list.map((item) => (
          <SushiCard key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  )
}

SushiList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number,
    })
  ),
}

export default SushiList
