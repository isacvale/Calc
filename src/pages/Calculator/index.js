import React from 'react'

import { Navigation } from '../../core'
import { Background, Frame, Page } from './components'

function App() {
  return (
    <Page>
        <Background />
        <Frame>
            <Navigation />
            <div><h1>Welcome to the Home Page</h1></div>
        </Frame>
    </Page>
  )
}

export default App
