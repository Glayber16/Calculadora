import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  min-height: 80px; 
  background-color: #2b2b2b;
  padding: 10px; 
  border-radius: 10px;
  margin-bottom: 20px; 

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-weight: 300; 
  font-size: 2.5em; 
  color: #ffffff; 
  input {
    width: 100%;
    background-color: transparent; 
    border-b: 1px;
    text-align: right;
    padding: 0 10px; 
    color: inherit; 
    font-size: inherit; 
    font-weight: inherit; 

    &:focus {
      outline: none;
    }
  }
`;
