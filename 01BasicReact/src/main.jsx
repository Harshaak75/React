import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const data = React.createElement(
//   'a',
//   {href:'https://www.google.com', target:'_blank'},
//   'click to move to google'
// )

createRoot(document.getElementById('root')).render(
    <App  />
)
