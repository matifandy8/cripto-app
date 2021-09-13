import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { AppThunk } from ".."
import { Currency } from "../types/types"


export interface CurrencyState {
  currencies: Currency[];
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

    setCurrencies: (state, { payload }: PayloadAction<Currency[]>) => {
      state.currencies = payload
    },
  },
})

export const { setLoading, setErrors, setCurrencies } = currencySlice.actions

export default currencySlice.reducer

export const currenciesSelector = (state: { currenciesStore: CurrencyState }) =>
  state.currenciesStore


  export const getCurrencies = (): AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true))
      try {
        const baseURL: string = "https://api-cripto.herokuapp.com/currencies"  
        const res = await axios.get(`${baseURL}`)
        dispatch(setLoading(false))
        dispatch(setCurrencies(res.data.data))
      } catch (error:any) {
        dispatch(setErrors(error))
        dispatch(setLoading(false))
      }
    }
  }