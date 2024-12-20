import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp() {
  return (
    <div>
      <h1>My app it izz </h1>
    </div>
  )
}

const reactElement = {
  type : 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit Google'
} // this won't get called inside render

const reactElement2 = (
  <a href="https://google.com" target = 'blank'>Visit Google</a>
)

const anotherUser = "coffee with react"
const reactElement3 = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  //<MyApp />
  //reactElement2
  //reactElement3
  //<App />
)
