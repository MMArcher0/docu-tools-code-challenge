import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fb6533;
  color: #FFFFFF;
  border: 1px solid #fb6533;
  border-radius: 1000px;
  padding: 12px 32px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  &:hover{
    background-color: #FF7547;
    border: 1px solid #FF7547;
  }
`;