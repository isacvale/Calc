import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button(({ theme }) => ({
  background: theme.colors.primary,
  border: 'solid 2px',
  borderRadius: '100%'
}))

const Button = ({ number, onClick }) => {
  return <StyledButton onClick={onClick}>{number}</StyledButton>
}

Button.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func
}

export default Button
