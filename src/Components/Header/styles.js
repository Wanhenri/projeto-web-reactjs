import styled from "styled-components";


export const Title = styled.h1`
  display: inline-flex;
  height: fit-content;
  font-size: var(--size-very-big);
  text-align: center;
  margin: auto;
  line-height: 1.1em;
`;

export const Subtitle = styled.h2`
  color: var(--color-zero);
  font-size: var(--size-medium);
  margin-bottom: var(--spacing-big);
  margin-top: var(--spacing-small);
  text-align: center;
  white-space: nowrap;
`;

export const Strong = styled.strong`
  color: var(--color-zero);
  font-size: 1.5em;
`;


export const TextWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.nav`  
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  height: 120px;
  position: sticky;
  top: 0;
  display: flex;
  text-align: center;
  z-index: 1001;
`;
