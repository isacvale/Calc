import colors from './colors'

const theme = mode => ({
    colors: {
        ...colors(mode),
    }
})

export default theme