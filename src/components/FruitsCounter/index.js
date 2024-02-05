import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onIncrementMango = () => {
    this.setState(prevCount => {
      console.log(`Previous Count of mango ${prevCount.countMango}`)
      return {countMango: prevCount.countMango + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevCount => {
      console.log()
      return {countBanana: prevCount.countBanana + 1}
    })
  }

  render() {
    const {countMango, countBanana} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1 className="top-heading">
            Bob ate <span className="style-mango-number">{countMango}</span>{' '}
            mangoes <span className="style-banana-number">{countBanana}</span>{' '}
            bananas
          </h1>
          <div className="button-image-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="mango-img"
              />
              <div className="center-align-button">
                <button
                  className="style-mango-button"
                  type="button"
                  onClick={this.onIncrementMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="banana-img"
              />
              <div className="center-align-button">
                <button
                  className="style-banana-button"
                  type="button"
                  onClick={this.onIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
