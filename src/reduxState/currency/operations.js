import { createAsyncThunk } from "@reduxjs/toolkit";
import { exchangeCurrency } from "service/exchangeAPI";
import { getUserInfo } from "service/opencagedataApi";

export const getBasedCurrency = createAsyncThunk(
  'currency/getBasedCurrency',
  async (crd) => {
    const res = await getUserInfo(crd);
    const currency = res.results[0].annotations.currency.iso_code;
    return currency
  },
  {
    condition: (_, actions) => {
      const state = actions.getState();
      const baseCurrency = state.currency.baseCurrency;
      console.log(baseCurrency);
      return (!baseCurrency);
      
    }
  }
);
export const currencyExchange = createAsyncThunk(
  'currency/currencyExchange',
  async (requestData) => {
    const data = await exchangeCurrency(requestData);
    console.log(data)
    return data;
  },
)