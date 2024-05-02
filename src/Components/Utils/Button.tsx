import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: inherit;
  border: none;
  padding: 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 1.2rem;
  &:hover{
    background-color: lightgray;
    border-radius: 20px;
  }
`;