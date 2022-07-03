import React from 'react'
import styled from '@emotion/styled'

import { Navigation } from '../../core'
import { Background } from './background'

const StyledMain = styled.main`
  margin: 2em auto;
`

function App() {
  return (
    <>
      <Background mode="light"></Background>
      <StyledMain className="App">
        <Navigation />
        <div><h1>Welcome to the Home Page</h1></div>
      </StyledMain>
    </>
  )
}

export default App
