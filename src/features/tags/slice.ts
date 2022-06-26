import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from 'features/auth/slice';
import { ListResponse } from 'api/types';
import { Tag } from 'api/clients/tags/types';

interface State {
  tags: Tag[];
  tagsCount: number;
  lastUpdated: number;
}

const initialState: State = {
  tags: [],
  tagsCount: 0,
  lastUpdated: Date.now(),
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags: (state, action: PayloadAction<ListResponse<Tag>>) => {
      state.tags = action.payload.result;
      state.tagsCount = action.payload.count;
    },
    updateTags: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setTags, updateTags } = tagsSlice.actions;
export const { reducer } = tagsSlice;
