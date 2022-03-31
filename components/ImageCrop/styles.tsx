import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: black;
`;

export const CropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
`;

export const ControlContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
`;

export const StyledImage = styled.img`
  width: 50vw;
  height: 50vw;
`;
