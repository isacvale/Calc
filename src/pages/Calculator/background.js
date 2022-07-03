import React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  display: block;
  margin: 0 auto;
  max-width: 1000px;
`

export function Background(props) {
  const colors = {
    light: [
      ['#fed23d', 'none'],
      ['#fe9200', 'none'],
    ],
    dark: [
      ['#000', 'none'],
      ['#182834', 'none'],
    ]
  }
  return <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="69.5" cy="47.8" r="45.6"
      style={{ fill: colors[props.mode][0][0] }}/>
    <circle cx="161.7" cy="58.8" r="28.3"
      style={{ fill: colors[props.mode][0][0] }}/>
    <circle cx="78" cy="150.3" r="22.1"
      style={{ fill: colors[props.mode][1][0] }}/>
    <circle cx="139.9" cy="152.3" r="16.9"
      style={{ fill: colors[props.mode][1][0] }}/>
  </StyledSvg>
}

Background.propTypes = {
  mode: String
}

