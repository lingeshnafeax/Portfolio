import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import HousePrice from "../assets/placeholderlogo.jpg";
import Diabetes from "../assets/diabetes.jpg";
import CustomerSegmentation from "../assets/customersegmentation.png";
export const projectSlice = createSlice({
  name: "project",
  initialState: [
    {
      id: 1,
      name: "House Price Prediction",
      imgsrc: HousePrice,
      description:
        "By analyzing key factors like location, property details, and market trends, I build a model to predict future house prices. This valuable information not only guides buyers and sellers, but also empowers the banking sector with data-driven insights to optimize loan allocation, mitigate risk, and navigate market fluctuations with greater confidence.",
      link: "https://nbviewer.org/github/lingeshnafeax/DataScience/blob/master/Chennai%20House%20Price%20Prediction/ChennaiHousePricePrediction.ipynb",
    },
    {
      id: 2,
      name: "Diabetes Prediction",
      imgsrc: Diabetes,
      description:
        "The main objective of this project is to develop a machine learning model that can accurately predict whether an individual is likely to have diabetes based on certain health-related features. By leveraging machine learning techniques, we aim to assist healthcare providers in early detection and management of diabetes, thereby improving patient outcomes and quality of life.",
      link: "https://nbviewer.org/github/lingeshnafeax/DataScience/blob/master/Diabetes%20Prediction/DiabetesPrediction.ipynb",
    },
    {
      id: 3,
      name: "Customer Segmentation",
      imgsrc: CustomerSegmentation,
      description:
        "The main objective of this project is to segment customers based on their purchasing behavior and demographic attributes using Python and machine learning techniques. By segmenting customers, businesses can tailor their marketing strategies, improve customer satisfaction, and enhance overall business performance.",
      link: "https://nbviewer.org/github/lingeshnafeax/DataScience/blob/master/Customer%20Segmentation/Customer_Segmentation.ipynb",
    },
  ],
  reducers: {
    nothing: (state) => {
      return state;
    },
  },
});
export const { nothing } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
