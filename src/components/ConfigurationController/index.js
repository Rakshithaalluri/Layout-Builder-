/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="conf-con-bg">
          <div className="layout-bg-container">
            <h1 className="layout-heading"> LayOut </h1>
            <div className="box-labels-container">
              <div className="box">
                <input
                  type="checkbox"
                  className="check-box"
                  onChange={onChangeContent}
                  checked={showContent}
                  id="content"
                />
                <label className="content-heading" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="box">
                <input
                  type="checkbox"
                  className="check-box"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                  id="leftNavbar"
                />
                <label className="content-heading" htmlFor="leftNavbar">
                  {' '}
                  Left Navbar{' '}
                </label>
              </div>
              <div className="box">
                <input
                  type="checkbox"
                  className="check-box"
                  onChange={onChangeRightNavbar}
                  id="rightNavbar"
                  checked={showRightNavbar}
                />
                <label className="content-heading" htmlFor="rightNavbar">
                  {' '}
                  Right Navbar{' '}
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
