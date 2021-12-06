export interface FormControlProps<T> {
  onChange: (value: T) => void;
  value: T;
  name?: string;
  onBlur: () => void;
  className?: string;
  isInvalid?: boolean;
}
