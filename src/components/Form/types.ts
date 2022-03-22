export interface FormControlProps<T> {
  value?: T | null;
  name?: string;
  onBlur?: () => void;
  className?: string;
  isInvalid?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
}

export interface TextEditorProps extends FormControlProps<string> {
  onChange?: (value: string) => void;
}

export interface SelectControlProps<T> extends FormControlProps<T> {
  onChange?: (value: T) => void;
}

export interface InputControlProps<T> extends FormControlProps<T> {
  onInput?: (value: T) => void;
  placeholder?: string;
}

export interface SwitchControlProps extends FormControlProps<boolean> {
  onChange?: (value: boolean) => void;
  label?: string;
}

export interface DatePickerProps<T> extends FormControlProps<T> {
  onChange?: (value: T) => void;
  showYearPicker?: boolean;
}
