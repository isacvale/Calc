import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const StyledBackground = styled.div(({theme}) => `
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(
    ${theme.colors.accentType},
    ${theme.colors.secondary}
  );
`)

const StyledSvg = styled.svg(({theme}) => `
  --primary: ${theme.colors.primary};
  --secondary: ${theme.colors.secondary};
  z-index: -1;
  display: block;
  margin: 0 auto;
  max-width: 1000px;
`)

const Background = (props) => <StyledBackground {...props}>
  <StyledSvg {...props}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle cx="69.5" cy="47.8" r="45.6" style={{fill: "var(--secondary)"}}/>
    <circle cx="161.7" cy="58.8" r="28.3" style={{fill: "var(--secondary)"}}/>
    <circle cx="78" cy="150.3" r="22.1" style={{fill: "var(--primary)"}}/>
    <circle cx="139.9" cy="152.3" r="16.9" style={{fill: "var(--primary)"}}/>
  </StyledSvg>
</StyledBackground>

Background.propTypes = {
  theme: PropTypes.shape({
    colors: {
      accentType: PropTypes.string,
      primary: PropTypes.string,
      secondary: PropTypes.string,
    }
  })
}

export default Background
