import React, { FC, useEffect } from 'react';
import { useEmailForm } from '../hooks';
import { EmailForm as ControlledEmailForm } from '../components';
import { useAppDispatch } from 'core/store';
import { useModal } from 'core/modal/hooks';
import { Contractor } from 'features/contractors/types';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { authRequest } from 'core/msal/constants';
import { setMsalAccessToken } from '../../auth/slice';

interface Props {
  contractors?: Contractor[];
}

const EmailForm: FC<Props> = (props) => {
  const { contractors = [] } = props;
  const { hideModal } = useModal();
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  const dispatch = useAppDispatch();

  const { control, handleSubmit, save } = useEmailForm({
    onSuccess: hideModal,
    contractors,
  });

  useEffect(() => {
    if (isAuthenticated) return;
    instance
      .loginPopup(authRequest)
      .then((data) => dispatch(setMsalAccessToken({ msalAccessToken: data.accessToken })))
      .catch(hideModal);
  }, [isAuthenticated, instance, hideModal, dispatch]);

  return (
    <ControlledEmailForm
      disabled={!isAuthenticated}
      control={control}
      onClose={hideModal}
      onSubmit={handleSubmit(save)}
      contractors={contractors}
    />
  );
};

export default EmailForm;
