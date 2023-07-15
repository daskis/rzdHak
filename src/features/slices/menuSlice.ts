import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
const menuSlice = createSlice({
    initialState,
    name: "menu",
    reducers: {
        openHandler: (state, action) => {
            state.isOpen = action.payload
        }
    }
})
export default menuSlice.reducer

export const {openHandler} = menuSlice.actions