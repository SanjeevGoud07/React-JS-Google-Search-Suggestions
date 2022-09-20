// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {List, clickArrow} = props
  const {suggestion} = List

  const clicked = () => {
    console.log(suggestion)
    clickArrow(suggestion)
  }

  return (
    <li className="List2">
      <p className="Para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="Arrow"
        onClick={clicked}
      />
    </li>
  )
}

export default SuggestionItem
