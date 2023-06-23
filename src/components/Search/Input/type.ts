import * as React from 'react';

export interface InputProps {
  placeholder?: string;
  allowClear?: boolean;
  enterButton?: string;
  size?: 'large' | 'middle' | 'small';
  onSearch?: (value: string) => void;
  loading?: boolean;
  customStyles?: React.CSSProperties;
}
