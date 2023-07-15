import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    width: 0
}
const screenSlice = createSlice({
    initialState,
    name: "screen",
    reducers: {
        changeSize: (state, action) => {
            state.width = action.payload
        }
    }
})
export default screenSlice.reducer

export const {changeSize} = screenSlice.actions