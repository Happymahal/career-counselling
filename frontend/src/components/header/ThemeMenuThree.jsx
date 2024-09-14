import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

//components
import ThemeMainMenu from "./ThemeMainMenu";
import SearchModal from "../search-modal/SearchModal";
import SideBar from "../sidebar/SideBar";
import MobileMenu from "./MobileMenu";

const ThemeMenuThree = () => {
  const [sticky, setSticky] = useState(false);
  const [modalIsopen, setOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [menu, setMenu] = useState("");

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const showMobilemenu = () => {
    setMenu("show");
  };
  const hideMobilemenu = () => {
    setMenu();
  };

  const stickyMenu = () => {
    if (window.scrollY >= 60) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", stickyMenu);
  return (
    <Fragment>
      <SearchModal isOpen={modalIsopen} onClick={closeModal} />
      <SideBar onClick={closeSidebar} value={showSidebar} />
      <header className="theme-main-menu theme-menu-three pt-25">
        <div className="top-header pb-25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-3 text-start d-none d-lg-inline-block">
                <div className="logo-area">
                  <Link
                    to="/"
                    className="text-7xl text-white font-bold uppercase no-underline"
                  >
                    Career Counselling
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9">
                <ul className="list-none header-info d-flex align-items-center justify-content-center justify-content-lg-end">
                  <li className="d-none d-md-inline-block">
                    <div className="header-info-box">
                      <div className="icon">
                        <i className="bi bi-person" />
                      </div>
                      <div className="text-content">
                        <span>Developed By</span>
                        <h6 className="text-white">Happy Mahal</h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header-info-box">
                      <div className="icon">
                        <i className="bi bi-telephone" />
                      </div>
                      <div className="text-content">
                        <span>Phone</span>
                        <h6 className="text-white">+44-7407-601966</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            sticky ? "main-header-area sticky-menu" : "main-header-area"
          }
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 d-lg-none d-md-block">
                <div className="text-xl text-white font-bold uppercase no-underline">
                  <Link to="/">Career Counselling</Link>
                </div>
              </div>
              <div className="col-xxl-8 col-lg-10 d-none d-lg-block">
                <nav className="navbar navbar-expand-lg">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {/* ThemeMainMenu  */}
                    <ThemeMainMenu />
                    {/* ThemeMainMenu  */}
                  </div>
                </nav>
              </div>
              <div className="col-xxl-4 col-lg-2 col-6 text-end">
                <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                  <li>
                    <div className="hamburger-menu">
                      <div className="d-none d-lg-inline-block">
                        <a
                          className="round-menu"
                          href="#"
                          onClick={openSidebar}
                        >
                          <i className="bi bi-list" />
                        </a>
                      </div>
                      <a
                        className="round-menu d-lg-none"
                        href="#"
                        onClick={showMobilemenu}
                      >
                        <i className="bi bi-list" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /.theme-main-menu */}
        <MobileMenu onClick={hideMobilemenu} active={menu} />
      </header>
    </Fragment>
  );
};

export default ThemeMenuThree;
