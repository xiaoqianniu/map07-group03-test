import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light text-bg-sushi-gray">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <Image
              src="/sushi_logo.png"
              alt="sushi logo"
              width="50"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-left" id="navbarID">
            <div className="navbar-nav mx-auto mb-2 mb-lg-0">
              <a
                className="nav-link active"
                aria-current="page"
                href="./Sushi shop/index.html"
              >
                User Login
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="sushiManage.html"
              >
                Sushi Admin
              </a>
            </div>
            <div className="navbar-nav ml-auto">
              <button type="button" className="btn">
                <i className="fa fa-user fa-2px icon"></i>
              </button>
              <button type="button" className="btn" id="shopping-cart">
                <i className="fas fa-shopping-cart cart-icon"></i>
                <span id="cart-count"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
