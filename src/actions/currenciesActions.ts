import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { Get } from "../services/publicApiService"
import { Currency } from "../types/types"



export const getAllCurrencies = createAsyncThunk<Currency[]>("/currencies", async() =>{
	try {
		const response = await Get("/currencies")
		return response.data.data
	} catch (error) {
		alert("Error")
		return error
	}
})



export interface CurrencyState {
  currencies: object[];
  loading: boolean;
  errors: string;
}

const initialState: CurrencyState = {
  currencies: [],
  loading: false,
  errors: "",
}

const currencySlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },

    setcurrencys: (state, { payload }: PayloadAction<object[]>) => {
      state.currencies = payload
    },
  },
})

export const { setLoading, setErrors, setcurrencys } = currencySlice.actions

export default currencySlice.reducer

export const currenciesSelector = (state: { currencyStore: CurrencyState }) =>
  state.currencyStore


