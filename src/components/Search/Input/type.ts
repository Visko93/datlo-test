import * as React from 'react';

export interface InputProps {
  search: string;
  placeholder?: string;
  allowClear?: boolean;
  enterButton?: string;
  size?: 'large' | 'middle' | 'small';
  loading?: boolean;
  customStyles?: React.CSSProperties;
  handleSearch?: () => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
