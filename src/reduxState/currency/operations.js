import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "service/opencagedataApi";

export const getBasedCurrency = createAsyncThunk(
    'currency/getBasedCurrency',
      async (crd) => {
          const res = await getUserInfo(crd);
          const currency = res.results[0].annotations.currency.iso_code;
          return currency
  },
)