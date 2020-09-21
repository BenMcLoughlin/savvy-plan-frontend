import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export interface IButton {
  label: string
  link: string
  handleChange?: () => void
}

export const LinkButton: FC<IButton> = ({ label, link, handleChange }) => (
  <Wrapper to={link} id="button" onClick={() => handleChange()}>
    {label}
  </Wrapper>
)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled(Link)`
  height: 4.2rem;
  min-width: 14rem;
  max-width: 17rem;
  background: #5e9090;
  border-radius: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: ${props => props.theme.fontSize.small};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in;
  text-transform: capitalize;
  text-decoration: none;
  &:hover {
    background: #548181;
  }
`
