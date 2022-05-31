const containerStyle = ({ width, justify, align, columns, columns_md, rows, mt, ml }) => {
  const base = ['grid'];

  if (columns) {
    base.push(`grid-cols-${columns}`);
  }

  if (columns_md) {
    base.push(`md:grid-cols-${columns_md}`);
  }

  if (rows) {
    base.push(`grid-rows-${rows}`);
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

  if (justify) {
    base.push(`justify-${justify}`);
  }

  if (align) {
    base.push(`items-${align}`);
  }

  return base.join(' ');
};

const Grid = ({
  width = 'fit',
  justify = 'start',
  align = 'start',
  mt = 0,
  ml = 0,
  columns = '1',
  columns_md = '1',
  rows = '1',
  children,
}) => {
  const styleProps = { width, justify, align, columns, columns_md, rows, mt, ml };
  return <div className={containerStyle({ ...styleProps })}>{children}</div>;
};

export default Grid;
