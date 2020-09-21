import React, { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  handleChange(): void
}

export const Exit: FC<IProps> = ({ handleChange }) => {
  return <Cross onClick={handleChange} />
}

const Cross = styled.div`
  position: relative;
  height: 2rem; /* this can be anything */
  width: 2rem; /* ...but maintain 1:1 aspect ratio */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.color.darkGrey};
  transform: rotate(-45deg);
  border-radius: 50%;
  z-index: 200;
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 50%;
    border-radius: 3px;
    height: 1px; /* cross thickness */
    background-color: ${props => props.theme.color.darkGrey};
  }
  &::before {
    transform: rotate(90deg);
  }
  &::after {
  }
`
