const colorPalette = {
    beige: '#CD9086',
    black: '#000000',
    darkGray: '#182834',
    darkRed: '#AB2912',
    gray: '#6C8FA8',
    lightBlue: '#9FD6FD',
    orange: '#FE9200',
    red: '#D82D0F',
    white: '#FFFFFF',
    yellow: '#FED23D',
}

const lightTheme = {
    mainType: colorPalette.darkRed,
    secondaryType: colorPalette.red,
    accentType: colorPalette.beige,
    primary: colorPalette.orange,
    secondary: colorPalette.yellow,
}

const darkTheme  = {
    mainType: colorPalette.darkRed,
    secondaryType: colorPalette.red,
    accentType: colorPalette.beige,
    primary: colorPalette.orange,
    secondary: colorPalette.yellow,
}

const colors = mode => {
    const themed = mode === 'light' ? lightTheme : darkTheme

    return {
        ...colorPalette,
        ...themed,
    }
}

export default colors
