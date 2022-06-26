import React, { ChangeEvent, FC } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';

interface Props {
  keyword?: string;
  onKeywordChange: (keyword: string) => void;
}

const ContractorsSearch: FC<Props> = (props) => {
  const { keyword, onKeywordChange } = props;

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onKeywordChange(event.target.value);
  };

  return (
    <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
      <Form.Control
        value={keyword}
        onChange={handleKeywordChange}
        type='search'
        placeholder='Search'
      />
      <InputGroup.Text>
        <Icon name='search' size={16} />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default ContractorsSearch;
