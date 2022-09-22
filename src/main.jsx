import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
const title = "Nasa Image";
document.title = title;


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
