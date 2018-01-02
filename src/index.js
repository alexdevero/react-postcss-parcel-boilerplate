import React from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

const App = () => (
  <div className="app">
    <h1 className="app__title">Welcome!</h1>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
