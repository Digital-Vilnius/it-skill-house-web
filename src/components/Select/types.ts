export type SingleSelectValueType = ValueType | null;
export type ValueType = string | number;
export type SelectProps = SingleSelectProps | MultiSelectProps;

export interface CommonSelectProps {
  options: SelectOption[];
  clearable?: boolean;
  loading?: boolean;
  onBlur?: () => void;
  id?: string;
  name?: string;
  className?: string;
  searchable?: boolean;
  creatable?: boolean;
  onCreate?: (value: string) => Promise<ValueType>;
}

export interface SingleSelectProps extends CommonSelectProps {
  multi?: false;
  value: SingleSelectValueType;
  onChange: (value: SingleSelectValueType) => void;
}

export interface MultiSelectProps extends CommonSelectProps {
  multi: true;
  value: ValueType[];
  onChange: (value: ValueType[]) => void;
}

export interface SelectOption {
  label: string;
  value: ValueType;
  disabled?: boolean;
  count?: number;
}
