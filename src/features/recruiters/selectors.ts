import { RootState } from 'core/store';
import { Recruiter } from 'api/clients/recruiters/types';
import { SelectOption } from 'components/Select';

export const selectRecruiters = (state: RootState): Recruiter[] => {
  return state.recruiters.recruiters;
};

export const selectRecruitersCount = (state: RootState): number => {
  return state.recruiters.recruitersCount;
};

export const selectRecruitersLastUpdated = (state: RootState): number => {
  return state.recruiters.lastUpdated;
};

export const selectRecruitersOptions = (state: RootState): SelectOption[] => {
  return selectRecruiters(state).map((recruiter) => ({
    value: recruiter.id,
    label: `${recruiter.firstName} ${recruiter.lastName}`,
  }));
};
