import styled, { css } from 'styled-components';

const NavigationItem = styled.div`
  padding: 16px;

  ${(props) => props.indictable && css`
    &:hover {
      border-bottom: 2px solid #008fb4;
      margin-bottom: -2px;
    }
  `}
`;

export default NavigationItem;
