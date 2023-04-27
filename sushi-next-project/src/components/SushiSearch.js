import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row, Button, InputGroup, Form } from 'react-bootstrap'

const SushiSearch = ({ sort, search }) => {
  const [query, setQuery] = useState('')
  const sortByPrice = () => {
    console.log('sort')
    sort()
  }
  const searchByTitle = () => {
    search(query)
  }

  const queryChanged = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="warning" onClick={sortByPrice}>
            Sort By Price
          </Button>
        </Col>

        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={queryChanged}
            />
            <Button variant="outline-success" onClick={searchByTitle}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

SushiSearch.propTypes = {
  sort: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
}

export default SushiSearch
