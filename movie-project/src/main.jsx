import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './companents/app/App.jsx'
import Provider from './companents/Context/data.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>,
)
