const flexContainerStyle = ({ width, width_md, justify, align, column, mt, ml }) => {
  const base = ['flex'];

  if (column) {
    base.push('flex-col');
  }

  if (mt) {
    base.push(`mt-${mt}`);
  }

  if (ml) {
    base.push(`ml-${ml}`);
  }

  if (width) {
    base.push(`w-${width}`);
  }

  if (width_md) {
    base.push(`md:w-${width_md}`);
  }

  if (justify) {
    base.push(`justify-${justify}`);
  }

  if (align) {
    base.push(`items-${align}`);
  }
  // console.table(base);
  return base.join(' ');
};

const Flex = ({
  width = 'fit',
  width_md,
  justify = 'start',
  align = 'start',
  column = false,
  mt = 0,
  ml = 0,
  children,
}) => {
  const styleProps = { width, width_md, justify, align, column, mt, ml };
  return <div className={flexContainerStyle({ ...styleProps })}>{children}</div>;
};

export default Flex;
