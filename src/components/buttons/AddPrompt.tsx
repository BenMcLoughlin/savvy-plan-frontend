import React, { FC } from "react"
import styled from "styled-components"
import { AddButton } from "components/buttons/AddButton"

interface IProps {
  handleChange(): void
  label: string
}

export const AddPrompt: FC<IProps> = ({ handleChange, label }) => {
  return (
    <Wrapper>
      <AddButton handleChange={handleChange} />
      <Div>{label}</Div>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  width: 25rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  position: relative;
`
const Div = styled.div`
  position: absolute;
  left: 3.3rem;
  font-size: 1.4rem
`