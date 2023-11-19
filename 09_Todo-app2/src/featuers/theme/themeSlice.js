import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themes: 'light'
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        darkMode: (state) => {
            state.themes = 'dark'
        },
        lightMode: (state) => {
            state.themes = 'light'
        }
    }
});

export const { darkMode, lightMode } = themeSlice.actions;

export default themeSlice.reducer;