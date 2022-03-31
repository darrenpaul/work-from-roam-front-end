import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row === true ? 'row' : 'column')};
  width: fit-content;
`;

const Flex = ({ children, row = false }) => {
  return <Container row={row}>{children}</Container>;
};

export default Flex;
