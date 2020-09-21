import React, { FC } from "react"
import styled from "styled-components"

interface IProps {
  handleChange(): void
}

export const AddButton: FC<IProps> = ({ handleChange }) => <Add onClick={handleChange} />


const Add = styled.div`
  position: relative;
  height: 2rem; /* this can be anything */
  width: 2rem; /* ...but maintain 1:1 aspect ratio */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.color.grey};
  border-radius: 50%;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 48%;
    border-radius: 3px;
    height: 1px; /* cross thickness */
    background-color: grey;
  }
  &::before {
    transform: rotate(90deg);
  }

`
