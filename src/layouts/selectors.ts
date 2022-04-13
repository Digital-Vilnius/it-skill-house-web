import { RootState } from 'core/store';

export const selectIsSideNavExpanded = (state: RootState) => {
  return state.layout.isSideNavExpanded;
};
