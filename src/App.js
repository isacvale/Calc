import React from 'react'
import { Provider } from 'react-redux'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { store } from './app/store'
import Calculator from './pages/Calculator'
import Dev from './pages/Dev'
import History from './pages/History'
import './App.css'

function App() {
  return (
    <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Calculator />} />
              <Route path="dev" element={<Dev />} />
              <Route path="history" element={<History />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
  )
}

export default App
