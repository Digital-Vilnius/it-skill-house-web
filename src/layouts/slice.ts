import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isSideNavExpanded: boolean;
}

const initialState: State = {
  isSideNavExpanded: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setIsSideNavExpanded: (state, action: PayloadAction<{ isSideNavExpanded: boolean }>) => {
      state.isSideNavExpanded = action.payload.isSideNavExpanded;
    },
  },
});

export const { reducer } = layoutSlice;
export const { setIsSideNavExpanded } = layoutSlice.actions;
