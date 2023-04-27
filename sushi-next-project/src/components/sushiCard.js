import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Col, Button } from 'react-bootstrap'

function SushiCard(props) {
  const { item } = props
  const imageUrl = item.image
  return (
    <Col>
      <div>
        <h4 className="card-title text-center">{item.title}</h4>
        <Image
          src={imageUrl}
          className="card-img-top mx-auto d-block"
          alt="..."
          width="300"
          height="200"
        />
        <h5>{item.price / 100}</h5>
        <Button>Add to cart</Button>
      </div>
    </Col>
  )
}

SushiCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
}

export default SushiCard
