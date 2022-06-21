import React, { FC } from 'react';
import { ContractorDetails as ControlledContractorDetails } from '../components';
import { EventsList } from 'features/events/hoc';
import { NotesList } from 'features/notes/hoc';
import { Contractor } from '../types';

interface Props {
  contractor: Contractor;
}

const ContractorDetails: FC<Props> = (props) => {
  const { contractor } = props;

  return (
    <div>
      <ControlledContractorDetails className='mb-4' contractor={contractor} />
      <EventsList className='mb-4' filter={{ contractorId: contractor.id }} />
      <NotesList filter={{ contractorId: contractor.id }} />
    </div>
  );
};

export default ContractorDetails;
