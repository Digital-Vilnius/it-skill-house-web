export interface FormControlProps<T> {
  value: T;
  name?: string;
  onBlur?: () => void;
  className?: string;
  isInvalid?: boolean;
}

export interface SelectControlProps<T> extends FormControlProps<T> {
  onChange: (value: T) => void;
}

export interface InputControlProps<T> extends FormControlProps<T> {
  onInput: (value: T) => void;
}

export interface SwitchControlProps<T> extends FormControlProps<T> {
  onChange: (value: T) => void;
}
