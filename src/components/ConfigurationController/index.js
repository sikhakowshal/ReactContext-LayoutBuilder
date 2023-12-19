import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

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

      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configuration-controller">
          <form className="form-container">
            <h1 className="checkbox-title">Layout</h1>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="Content"
                className="checkbox"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="checkbox1" className="checkbox-label">
                Content
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox2"
                name="checkbox2"
                value="leftNavbar"
                className="checkbox"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="checkbox2" className="checkbox-label">
                Left Navbar
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox3"
                name="checkbox3"
                value="rightNavbar"
                className="checkbox"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="checkbox3" className="checkbox-label">
                Right Navbar
              </label>
            </div>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
