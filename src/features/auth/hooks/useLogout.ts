import { msalInstance } from 'core/msal';

const useLogout = () => {
  const logout = () => {
    msalInstance.logoutRedirect();
  };

  return { logout };
};

export default useLogout;
