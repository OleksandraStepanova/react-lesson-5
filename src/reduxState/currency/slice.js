import { createSlice } from "@reduxjs/toolkit";
import { getBasedCurrency } from "./operations";

export const currencySlice = createSlice({
    initialState: { baseCurrency: '' },
    name: 'currency',
    extraReducers: (builder) => {
        builder.addCase(getBasedCurrency.fulfilled, (state, action) => {
            state.baseCurrency = action.payload;            
        })
    },
    selectors:{selectBasedCurrency:(state)=>state.baseCurrency}
})

export const {selectBasedCurrency} = currencySlice.selectors;