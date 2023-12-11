import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Hello from './components/Hello'
import AboutMe from './components/About me'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Hello/>
    <AboutMe/>
  </React.StrictMode>,
)
