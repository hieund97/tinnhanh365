'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <Link href="/" className="logo m-0 float-start">
                  TinNhanh365<span className="text-primary">.</span>
                </Link>
              </div>
              <div className="col-8 text-center">
                <form action="/search" className="search-form d-inline-block d-lg-none">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="bi-search"></span>
                </form>
                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                  <li className="active"><Link href="/">Home</Link></li>
                  <li className="has-children">
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><Link href="/search">Search Result</Link></li>
                      <li><Link href="/category/blog">Blog</Link></li>
                      <li><Link href="/blog/1">Blog Single</Link></li>
                      <li><Link href="/category">Category</Link></li>
                      <li><Link href="/about-us">About</Link></li>
                      <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/category/culture">Culture</Link></li>
                  <li><Link href="/category/business">Business</Link></li>
                  <li><Link href="/category/politics">Politics</Link></li>
                </ul>
              </div>
              <div className="col-2 text-end">
                <a
                  href="#"
                  className="burger ms-auto float-end site-menu-Toggle js-menu-Toggle d-inline-block d-lg-none light"
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span></span>
                </a>
                <form action="/search" className="search-form d-none d-lg-inline-block">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="bi-search"></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-Toggle" onClick={() => setMobileMenuOpen(false)}></span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            {/* Thêm menu mobile nếu cần */}
          </div>
        </div>
      )}
    </nav>
  );
}