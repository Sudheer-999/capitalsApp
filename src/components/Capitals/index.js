import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onCapitalChange = event => {
    this.setState({capitalId: event.target.value})
  }

  filteredCountry = () => {
    const {capitalId} = this.state

    const countryItem = countryAndCapitalsList.find(
      eachItem => eachItem.id === capitalId,
    )

    return countryItem.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.filteredCountry()

    return (
      <div className="bg-container">
        <div className="sub-con">
          <h1 className="head">Countries And Capitals</h1>
          <div className="drop-down">
            <select
              value={capitalId}
              onChange={this.onCapitalChange}
              className="options"
              id="countries"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="option"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label-txt">is the capital of which country?</label>
          </div>
          <p className="displayed-country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
