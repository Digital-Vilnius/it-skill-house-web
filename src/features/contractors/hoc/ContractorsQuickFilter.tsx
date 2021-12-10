import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/store';
import { SwitchInput } from 'components';
import { setContractorsFilterAction } from '../actions';
import classNames from 'classnames';
import { TechnologiesMultiSelect } from 'features/technologies/hoc';

interface Props {
  className?: string;
}

const ContractorsQuickFilter: FC<Props> = (props) => {
  const { className } = props;
  const { filter } = useAppSelector((state) => state.contractors);
  const dispatch = useAppDispatch();

  const handleHasContractsChange = (hasContract: boolean) => {
    const newFilter = { ...filter, hasContract };
    dispatch(setContractorsFilterAction({ filter: newFilter }));
  };

  const handleIsAvailableChange = (isAvailable: boolean) => {
    const newFilter = { ...filter, isAvailable };
    dispatch(setContractorsFilterAction({ filter: newFilter }));
  };

  const handleTechnologiesChange = (technologiesIds: number[]) => {
    const newFilter = { ...filter, technologiesIds };
    dispatch(setContractorsFilterAction({ filter: newFilter }));
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
      <TechnologiesMultiSelect
        className='me-4'
        value={filter.technologiesIds}
        onChange={handleTechnologiesChange}
      />
    </div>
  );
};

export default ContractorsQuickFilter;
