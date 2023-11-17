import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";

import Catalog from '../catalog/Catalog';

import "./Header.css"






const Header = () => {

  
  return (

    <main className="site-wrapper">
  <div className="pt-table desktop-768">
    <div
      className="pt-tablecell page-home relative"
      style={{
        backgroundImage:
          "url(https://th.bing.com/th?id=OIF.5zxbeDCn5ZhzzaPfkx%2bZfw&rs=1&pid=ImgDetMain)",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div className="page-title  home text-center">
              <span className="heading-page"> Travel Around The World</span>
              <p className="mt20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="hexagon-menu clear">
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="/" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-universal-access" />
                    </span>
                    <span className="title">Home</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="/catalog" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-bullseye" />
                    </span>
                    <span className="title">Catalog</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="/create" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-braille" />
                    </span>
                    <span className="title">Create</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="/register" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-id-badge" />
                    </span>
                    <span className="title">Register</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-life-ring" />
                    </span>
                    <span className="title">Works</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-clipboard" />
                    </span>
                    <span className="title">Testimonials</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <Link to="" className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-map-signs" />
                    </span>
                    <span className="title">Contact</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>




  );
}

export default Header;


