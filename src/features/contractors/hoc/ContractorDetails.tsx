import React, { FC } from 'react';
import { useContractor } from '../hooks';
import { ContractorDetails as ControlledContractorDetails } from '../components';
import { EventsList } from 'features/events/hoc';
import { NotesList } from 'features/notes/hoc';

interface Props {
  id: number;
}

const ContractorDetails: FC<Props> = (props) => {
  const { id } = props;
  const { contractor, isLoading } = useContractor(id);

  if (!contractor || isLoading) return <div>Loading</div>;

  return (
    <div>
      <ControlledContractorDetails className='mb-4' contractor={contractor} />
      <EventsList className='mb-4' filter={{ contractorId: id }} />
      <NotesList filter={{ contractorId: id }} />
    </div>
  );
};

export default ContractorDetails;
