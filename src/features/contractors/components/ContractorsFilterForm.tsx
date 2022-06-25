import React, { FC, useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { ContractorsFilter, ContractorsFilterRule } from 'api/clients/contractors/types';
import ContractorsFilterRuleForm from './ContractorsFilterRuleForm';

interface Props {
  onClose: () => void;
  onSubmit: (filter: ContractorsFilter) => void;
  onReset: () => void;
  filter: ContractorsFilter;
}

const ContractorsFilterForm: FC<Props> = (props) => {
  const { onClose, onSubmit, onReset, filter } = props;
  const [rules, setRules] = useState<ContractorsFilterRule[]>(filter.rules);

  const handleOnAdd = (rule: ContractorsFilterRule) => {
    setRules([...rules, rule]);
  };

  const handleOnEdit = (index: number, rule: ContractorsFilterRule) => {
    const newRules = [...rules];
    newRules[index] = rule;
    setRules(newRules);
  };

  const handleOnRemove = (indexToDelete: number) => {
    const newRules = rules.filter((_, index) => index !== indexToDelete);
    setRules(newRules);
  };

  return (
    <>
      <Modal.Body>
        <Row className='mb-2'>
          <Col>
            <ContractorsFilterRuleForm onSave={handleOnAdd} />
          </Col>
        </Row>
        {rules.map((rule, index) => (
          <Row className='mb-2' key={index}>
            <Col>
              <ContractorsFilterRuleForm
                rule={rule}
                onClear={() => handleOnRemove(index)}
                onSave={(editedRule) => handleOnEdit(index, editedRule)}
              />
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className='button button-secondary'>
          Close
        </button>
        <button onClick={onReset} className='button button-secondary'>
          Reset
        </button>
        <button onClick={() => onSubmit({ rules })} className='button button-primary'>
          Filter
        </button>
      </Modal.Footer>
    </>
  );
};

export default ContractorsFilterForm;
