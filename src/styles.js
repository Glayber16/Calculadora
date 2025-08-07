import styled from "styled-components";
import Button from "./components/Button";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1c1c1c;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Arial', sans-serif;

`;

export const Content = styled.div`
  background-color: #2b2b2b;
  color: #fff;
  width: 100%;
  max-width: 600px;

  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;

`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
