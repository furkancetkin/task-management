import { configureStore } from "@reduxjs/toolkit";
import task from "./task";
import modal from "./modal";
import theme from "./theme";

const store = configureStore({
    reducer: {
        task,
        modal,
        theme
    }
})

export default store;