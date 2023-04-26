import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='Nav'>
      <nav className='navbar navbar-expand-sm navbar-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img src='/images/sushi_logo.png' alt='Sushi logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarID'
            aria-controls='navbarID'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse navbar-left' id='navbarID'>
            <div className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <a className='nav-link active' aria-current='page' href='#'>
                About us
              </a>
              <a className='nav-link active' aria-current='page' href='#'>
                Discount
              </a>
              <a className='nav-link active' aria-current='page' href='#'>
                Payment
              </a>
              <a className='nav-link active' aria-current='page' href='#'>
                Delivery
              </a>
              <a className='nav-link active' aria-current='page' href='#'>
                Contacts
              </a>
            </div>
            <div className='navbar-nav ml-auto'>
              <button type='button' className='btn'>
                <i className='fa fa-user fa-2px icon'></i>
              </button>
              <button type='button' className='btn'>
                <i className='fas fa-shopping-cart icon'></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
