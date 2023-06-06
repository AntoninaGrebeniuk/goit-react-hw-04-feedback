import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OptionsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsBtn = styled.button`
  min-width: 120px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 32px;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(5px) scale(0.95);
    backdrop-filter: none;
  }
`;
