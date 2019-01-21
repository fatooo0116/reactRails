import React from "react"



class Header extends React.Component {
  render () {
    return (

      <header id="site_header" className="header mobile-menu-hide">
          <div className="header-content clearfix">
            <div  className="my-photo" >
               Mike
            </div>

            <div className="site-title-block">
              <div className="site-title">Mike Hsu</div>
            </div>

              {/* Navigation */}
            <div className="site-nav">
               {/*  Main menu */}
              <ul id="nav" className="site-main-menu">
                <li><a href="#">About Me</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              {/* /Main menu */}
            </div>
            {/* Navigation */}

            {/* Social Links */}
            <div className="social-links">
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
            </div>
            {/* Social Links */}


            <div className="copyrights">© 2019 All rights<br/> reserved.</div>
            {/*  Copyrights */}
          </div>
        </header>


    );
  }
}

export default Header
