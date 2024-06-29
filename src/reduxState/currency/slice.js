import { createSlice } from "@reduxjs/toolkit";
import { currencyExchange, getBasedCurrency } from "./operations";

export const currencySlice = createSlice({
    initialState: {
        baseCurrency: '',
        exchangeInfo: null,
     },
    name: 'currency',
    reducers: {
        setDefaultCurrency: (state, action) => {
            state.baseCurrency = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBasedCurrency.fulfilled, (state, action) => {
            state.baseCurrency = action.payload;            
        }).addCase(currencyExchange.fulfilled, (state, action) => {
            state.exchangeInfo = action.payload;
        })
    },
    selectors:{selectBasedCurrency:(state)=>state.baseCurrency}
})

export const { selectBasedCurrency } = currencySlice.selectors;
export const { setDefaultCurrency } = currencySlice.actions;