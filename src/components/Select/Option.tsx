import { FC } from 'react';
import classNames from 'classnames';
import { Badge, Form } from 'react-bootstrap';

interface SelectOptionProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  count?: number;
  selected?: boolean;
  multi?: boolean;
}

const Option: FC<SelectOptionProps> = (props) => {
  const { multi, label, disabled, count, selected, onClick } = props;

  const handleOnClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <div onClick={handleOnClick} className={classNames('select-option', { disabled, selected })}>
      {multi && <Form.Check readOnly className='select-option-check' checked={selected} />}
      <span className='select-option-label'>{label}</span>
      {count !== undefined && (
        <Badge bg='light' className='select-option-count'>
          {count}
        </Badge>
      )}
    </div>
  );
};

export default Option;
