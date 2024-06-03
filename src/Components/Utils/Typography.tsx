import styled from "styled-components";

export const Typography = styled.p<{ variant?: 'h2' | 'h3' | 'body' | 'body2' | 'title' }>`
  ${props => {
    switch (props.variant) {
      case 'h2':
        return `
          font-size: 2rem;
          font-weight: bold;
          font-family: cursive;
        `
      case 'h3':
        return `
          font-size: 1.3rem;
          font-weight: bold;
          font-family: cursive;
          margin: 8px;
        `
      case 'body':
        return `
          font-weight: bold;
          font-size: 1.1rem;
          overflow: hidden;
        `
      case 'title':
        return `
          font-weight: bold;
          font-size: 1.1rem;
          overflow: hidden;
          color: #FB6533;
        `
      case 'body2':
        return `
          word-wrap: anywhere;
        `
      default:
        return `
          font-size: 1rem;
          overflow: hidden;
          margin: 8px;
        `
    }
  }}
`;