import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { projectReducer } from "./features/projectSlice";
const Store = configureStore({
  reducer: { project: projectReducer },
});

export default Store;
