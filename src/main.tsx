import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Hello from './components/Hello'
import AboutMe from './components/About me'
import Projects from './components/Projects'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Hello/>
    <AboutMe/>
    <Projects/>
  </React.StrictMode>,
)
