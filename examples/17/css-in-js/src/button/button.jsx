import { styled } from "styled-components";

// font-size: ${(props) => props.fontSize};
const StyledButton = styled.div`
  font-size: 30px;
  padding: 10px;
  background-color: #ccc;
  cursor: pointer;
  display: inline-block;
`;

export function Button() {
  return <StyledButton>Button</StyledButton>;
}
