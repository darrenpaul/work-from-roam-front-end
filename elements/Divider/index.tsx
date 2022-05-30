import React from 'react';
import { dividerStyle } from './styles';

const Divider = ({ styles = '' }: { styles?: string }) => {
  return <hr className={dividerStyle(styles)} />;
};

export default Divider;
