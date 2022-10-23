import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(160, 157, 157, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: rgb(160, 157, 157);
`;

export const Img = styled.img``;
