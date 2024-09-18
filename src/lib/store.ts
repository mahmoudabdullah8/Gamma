// // store/store.ts

// import { configureStore } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// // Example slice (you can create multiple slices for different features)
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 100 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// export const { increment, decrement } = counterSlice.actions;

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
