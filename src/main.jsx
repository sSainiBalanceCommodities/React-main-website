import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import { MantineProvider } from '@mantine/core'
import SetsSlider from './components/SetsApart/SetsSlider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <MantineProvider>
      <App />
      {/* <SetsSlider /> */}
    </MantineProvider>
  </BrowserRouter>
)
