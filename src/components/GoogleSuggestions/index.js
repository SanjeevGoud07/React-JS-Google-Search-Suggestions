// Write your code here
import './index.css'
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchIn: ''}

  onSearched = event => {
    this.setState({searchIn: event.target.value})
  }

  clickArrow = value => {
    this.setState({searchIn: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchIn} = this.state

    const filteredList = suggestionsList.filter(Each =>
      Each.suggestion.toLowerCase().includes(searchIn.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="Google"
          alt="google logo"
        />
        <div className="Box">
          <div className="SearchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="Search_Icon"
            />
            <input
              type="search"
              className="Search"
              placeholder="Search Google"
              onChange={this.onSearched}
              value={searchIn}
            />
          </div>
          <ul className="List">
            {filteredList.map(Each => (
              <SuggestionItem
                clickArrow={this.clickArrow}
                List={Each}
                key={Each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
