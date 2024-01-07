// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading"> Left Navbar Menu</h1>
              <ul className="inside-texts-content">
                <li className="item-text"> Item 1 </li>
                <li className="item-text"> Item 2 </li>
                <li className="item-text"> Item 3 </li>
                <li className="item-text"> Item 4 </li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-navbar-heading"> Content </h1>
              <p className="item-text">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqu. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="left-navbar-heading"> Right Navbar </h1>
              <p className="right-box-content"> Ad 1 </p>
              <p className="right-box-content"> Ad 2 </p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
