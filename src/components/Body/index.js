import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const LeftNavbarContainer = (
    <div className="navbar-container">
      <h1 className="navbar-title">Left Navbar Menu</h1>
      <ul className="left-navbar-items-container">
        <li className="navbar-item-text">Item1</li>
        <li className="navbar-item-text">Item2</li>
        <li className="navbar-item-text">Item3</li>
        <li className="navbar-item-text">Item4</li>
      </ul>
    </div>
  )

  const contentContainer = (
    <div className="content-container">
      <div className="container-content">
        <h1 className="navbar-title">Content</h1>
        <p className="navbar-text">
          Lorem ipsum dolor sit amet, consectetur edipiscing elit, sed do eusmor
          tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim
          venium.
        </p>
      </div>
    </div>
  )

  const rightNavbarContainer = (
    <div className="navbar-container">
      <h1 className="navbar-title">Right Navbar</h1>
      <div className="ad-container">
        <p className="navbar-text">Ad 1</p>
      </div>
      <div className="ad-container">
        <p className="navbar-text">Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar && LeftNavbarContainer}
            {showContent && contentContainer}
            {showRightNavbar && rightNavbarContainer}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
