import React from 'react'
import styled from '@emotion/styled'

const Page = styled.div(({theme}) => ({
    alignItems: 'center',
    background: theme.colors.white,
    bottom: 0,
    display: 'flex',
    left: 0,
    justifyContent: 'center',
    position: 'fixed',
    right: 0,
    top: 0,
}))

export default Page