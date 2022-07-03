import React from 'react'
import styled from '@emotion/styled'

const StyledFrame = styled.div(({theme}) => ({
    background: theme.colors.primary,
    borderRadius: 16,
    height: 'calc(100vh - 2rem)',
    width: 280,
}))

const Frame = args => {
    return <StyledFrame {...args} />
}

export default Frame