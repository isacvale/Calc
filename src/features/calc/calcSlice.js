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

export const { addChar, removeChar } = calcSlice.actions

export default calcSlice.reducer