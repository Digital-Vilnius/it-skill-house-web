import { useAppDispatch } from 'core/store';
import { logout as logoutAction } from '../slice';
import msalInstance from 'core/msal';
import { useIsAuthenticated } from '@azure/msal-react';

const useLogout = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useIsAuthenticated();

  const logout = async () => {
    if (isAuthenticated) await msalInstance.logoutPopup();
    dispatch(logoutAction());
  };

  return { logout };
};

export default useLogout;
