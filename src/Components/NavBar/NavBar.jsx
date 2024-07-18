import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    return <>
        <nav className={style.NavBar + " navbar navbar-expand-lg bg-light"}>
            <div className="container">
                <a className="navbar-brand fs-3" href="#">Parfum</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        {isMobile ? <li classname="nav-item">
                            <div className="btn-group row">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul className="dropdown-menu">
                                    <Link className='text-decoration-none'>
                                        <li><a className="dropdown-item text-decoration-none">Men</a></li>
                                    </Link>
                                    <Link className='text-decoration-none'>
                                        <li><a className="dropdown-item text-decoration-none">Women</a></li>
                                    </Link>
                                    <Link className='text-decoration-none'>
                                        <li><a className="dropdown-item text-decoration-none">Kids</a></li>
                                    </Link>
                                </ul>
                            </div>
                        </li> : <li classname="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul className="dropdown-menu">
                                    <Link className='text-decoration-none'>
                                        <li><a className="dropdown-item text-decoration-none">Men</a></li>
                                    </Link>
                                    <Link className='text-decoration-none'>
                                        <li><a className="dropdown-item text-decoration-none">Women</a></li>
                                    </Link>
                                    <Link className='text-decoration-none'>
                                        <li><a className="dropdown-item text-decoration-none">Kids</a></li>
                                    </Link>
                                </ul>
                            </div>
                        </li>}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button type="button" className="btn position-relative">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        99+
                                    </span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}
