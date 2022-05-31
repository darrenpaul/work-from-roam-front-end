import React from 'react';
import { labelStyle } from './styles';

const Label = ({ children }) => {
  return <label className={labelStyle()}>{children}</label>;
};

export default Label;
