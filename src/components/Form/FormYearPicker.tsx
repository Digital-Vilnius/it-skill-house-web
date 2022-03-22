import React, { FC, useMemo } from 'react';
import { FormSelect } from 'components';
import { FormSelectProps } from 'components/Form/FormSelect';
import { SelectOption } from '../Select';
import range from 'lodash/range';

const FormYearSelect: FC<FormSelectProps> = (props) => {
  const options = useMemo<SelectOption[]>(() => {
    const currentYear = new Date().getFullYear();
    const yearsRange = range(currentYear - 50, currentYear + 1).reverse();
    return yearsRange.map((year) => ({ label: year.toString(), value: year }));
  }, []);

  return <FormSelect {...props} options={options} />;
};

export default FormYearSelect;
