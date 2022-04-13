import { FC } from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';

interface SelectOptionProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
  multi?: boolean;
}

const Option: FC<SelectOptionProps> = (props) => {
  const { multi, label, disabled, selected, onClick } = props;

  const handleOnClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <div onClick={handleOnClick} className={classNames('select-option', { disabled, selected })}>
      {multi && <Form.Check readOnly className='select-option-check' checked={selected} />}
      <span className='select-option-label'>{label}</span>
    </div>
  );
};

export default Option;
