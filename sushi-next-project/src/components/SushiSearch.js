import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row, Button, InputGroup, Form } from 'react-bootstrap'

const SushiSearch = ({ sort, search }) => {
  const [query, setQuery] = useState('')
  const sortByPrice = () => {
    sort()
  }
  const searchByTitle = () => {
    search(query)
  }

  const queryChanged = (event) => {
    setQuery(event.target.value)
    search(query)
  }

  const displayAll = () => {
    search('')
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
          <Button variant="warning" onClick={displayAll}>
            Display all
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
            <Button variant="warning" onClick={searchByTitle}>
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
