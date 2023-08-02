import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="header-wrapper">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link to="/" className="logo-link">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="./images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <div className="mb-logo">
                <Link to="/" className="logo-link">
                  <img src="/images/logo.png" alt="" className="logo-img" />
                </Link>
              </div>
              <div className="left-side d-flex algin-items-center">
                <li className="nav-list">
                  <HashLink
                    to="/"
                    className="nav-link home-icons"
                    onClick={_toggleSidebar}
                  >
                    <span>
                      <img src="/images/header/home-icon.svg" alt="" />
                    </span>
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink
                    to="#"
                    className="nav-link"
                    onClick={_toggleSidebar}
                  >
                    NFT Collections
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink to="" className="nav-link" onClick={_toggleSidebar}>
                    Resources
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink to="" className="nav-link" onClick={_toggleSidebar}>
                    About
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink to="" className="nav-link" onClick={_toggleSidebar}>
                    News
                  </HashLink>
                </li>
                <li className="nav-list">
                  <HashLink to="" className="nav-link" onClick={_toggleSidebar}>
                    My Account
                  </HashLink>
                </li>
              </div>

              <div className="left-side d-flex algin-items-center">
                <button className="custom-btn">Connect wallet</button>
              </div>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="./images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
