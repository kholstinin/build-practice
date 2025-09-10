import { styled } from "@linaria/react";

// font-size: ${(props) => props.fontSize};
const StyledButton = styled.div`
  font-size: ${(props) => props.fontSize};
  padding: 10px;
  background-color: #ccc;
  cursor: pointer;
  display: inline-block;
`;

export function Button() {
  return <StyledButton fontSize="30px">Button</StyledButton>;
}
