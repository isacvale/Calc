import {createSlice} from  '@reduxjs/toolkit'

export const calcSlice = createSlice({
    name: 'calc',
    initialState: {
        value: '',
    },
    reducers: {
        addChar: () => {},
        removeChar: () => {},
    }
})

export { addChar, removeChar } = calcSlice.actions

export default calcSlice.reducer