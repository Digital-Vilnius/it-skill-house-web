import { useAppDispatch } from 'core/store';
import { logout as logoutAction } from '../slice';

const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return { logout };
};

export default useLogout;
