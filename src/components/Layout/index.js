// Write your code here
import './index.css'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => (
  <div className="layout-container">
    <div className="body-header-footer-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
