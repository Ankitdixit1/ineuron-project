
// procedure for using redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import homeslice from './homeslice'

export const store = configureStore({
  reducer: {
    home:homeslice,
  },
})