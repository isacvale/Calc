import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { store } from './app/store'
import theme from './theme'
import { Calculator, About, History } from './pages'
import './App.css'

function App() {
  const [mode, setMode] = React.useState('light')
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme(mode)}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Calculator />} />
              <Route path="about" element={<About />} />
              <Route path="history" element={<History />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
