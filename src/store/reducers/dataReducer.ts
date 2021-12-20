import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../store";
// Define a type for the slice state
interface IDataState {
  dwhLink: string;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: IDataState = {
  dwhLink: '',
  isLoading: false,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDwhLink: (state, {payload}: PayloadAction<string>) => {
      state.dwhLink = payload;
    },
    setIsVariablesLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
})

export const { setDwhLink, setIsVariablesLoading } = dataSlice.actions

export const selectDwhLink = (state: RootState) => state.data.dwhLink;

export default dataSlice.reducer