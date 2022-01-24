import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/store';
import { SwitchInput } from 'components';
import { setFilterAction } from '../actions';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const ContractorsQuickFilter: FC<Props> = (props) => {
  const { className } = props;
  const { filter } = useAppSelector((state) => state.contractors);
  const dispatch = useAppDispatch();

  const handleHasContractsChange = (hasContract: boolean) => {
    const newFilter = { ...filter, hasContract };
    dispatch(setFilterAction({ filter: newFilter }));
  };

  const handleIsAvailableChange = (isAvailable: boolean) => {
    const newFilter = { ...filter, isAvailable };
    dispatch(setFilterAction({ filter: newFilter }));
  };

  return (
    <div className={classNames('d-flex align-items-center', className)}>
      <SwitchInput
        className='me-4'
        label='Has contract'
        value={filter.hasContract}
        onChange={handleHasContractsChange}
      />
      <SwitchInput
        className='me-4'
        label='Available'
        value={filter.isAvailable}
        onChange={handleIsAvailableChange}
      />
    </div>
  );
};

export default ContractorsQuickFilter;
