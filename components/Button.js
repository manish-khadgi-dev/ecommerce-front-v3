import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      border: #5542f6;
      color: #fff;
    `}
  ${(props) =>
    props.size === 'l' &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
    `}
`;

export default function PrimaryBtn({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}