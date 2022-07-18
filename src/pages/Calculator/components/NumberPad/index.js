import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Button from '../Button/index'

const StyledDiv = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
}))

const NumberPad = ({ onClick }) => {
  const numPad = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [null, 0, '.']
  ].flat()
  return (
    <StyledDiv>
      {numPad.map((n) => (
        n === null
          ? <div></div>
          : <Button key={`n${n}`} number={n} onClick={onClick}></Button>
      ))}
    </StyledDiv>
  )
}

NumberPad.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func
}

export default NumberPad
