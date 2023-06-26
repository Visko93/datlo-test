'use client';

import styled from 'styled-components';

const StyledLayout = styled.main`
  --text: #fff;
  --background: #6c355c;
  --background-light: #9ed64f;
  --background-dark: #3c1f2b;

  padding: 0;
  margin: 0;
  box-sizing: border-box;

  background-image: url('assets/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: var(--background);
  height: 100vh;
  width: 100vw;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  & .link {
    padding: 4rem;
    font-size: 3rem;
    margin: 0;
    color: var(--text);

    text-decoration: none;
  }
`;

export { StyledLayout };
