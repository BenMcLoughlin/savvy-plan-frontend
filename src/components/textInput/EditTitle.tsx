import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  handleChange: (value: string) => void;
  value: string;
  selectedFocus?: boolean;
}

export const EditTitle: FC<IProps> = ({ handleChange, selectedFocus, value }) => {
  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        autoFocus={selectedFocus ? selectedFocus : false}
      />
      <Input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        autoFocus={selectedFocus ? selectedFocus : false}
      />
    </Wrapper>
  );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 3.5rem;
  width: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-left: -50rem;
`;
const Input = styled.input`
  height: 3rem;
  padding-left: 1.5rem;
  width: 16rem;
  outline: none;
  background: none;
  color: ${(props) => props.theme.color.darkGrey};
  border: none;
  font-size: 1.6rem;
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    background: lightGrey;
  }
`;
