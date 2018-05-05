import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import store from '../redux/store'

import App from '../components/App'

class Root extends Component {
  render () {
    console.log('store', store)
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/:filter?' component={App} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(Root)
