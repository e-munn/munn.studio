import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Amplify } from 'aws-amplify'
import { BrowserRouter } from 'react-router-dom'

import config from './aws-exports'
// config.oauth.redirectSignIn = `https://otto.directory`
// config.oauth.redirectSignOut = `https://otto.directory`

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

reportWebVitals()
