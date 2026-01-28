import react from "react";

export const ReduxSlicer = createSlice({
  name: "CounterExample",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: () => {
      state.count - +1;
    },
    reset: () => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, reset } = ReduxSlicer.actions;
export default ReduxSlicer.reducer;
