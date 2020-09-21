import React, { FC, useEffect } from "react"
import styled from "styled-components"
import { ArrowRightCircle } from "@styled-icons/remix-fill/ArrowRightCircle"

interface IProps {
  setDirection: (value: string) => void
  handleChange: (setDirection: any, valid: boolean) => void
  nextHandleChange?: () => void //this allows a specific instance of the wizard to attach a special handle change when the next button is clicked. Prepares the state for the next
  valid: boolean
  state: any
}

export const Next: FC<IProps> = ({ handleChange, nextHandleChange, setDirection, valid, state }) => {
  useEffect(() => {
    const pressEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleChange(setDirection, valid)
        if (nextHandleChange) nextHandleChange()
      }
    }
    if (valid) {
      window.addEventListener("keydown", pressEnter)
      return () => window.removeEventListener("keydown", pressEnter)
    }
  }, [handleChange, nextHandleChange, setDirection, valid, state])

  return (
    <Wrapper>
      <ArrowRight
        valid={valid}
        onClick={() => {
          setDirection("forward")
          handleChange(setDirection, valid)
          if (nextHandleChange) nextHandleChange()
        }}
        id="nextButton"
      />
      {valid && <P>Press Enter</P>}
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  position: absolute;
  top: 18rem;
  right: 8%;
`

interface ArrowProps {
  valid: boolean
}
const ArrowRight = styled(ArrowRightCircle)<ArrowProps>`
  color: ${props => (props.valid ? "#9AC0CD" : "#C8C7C7")};
  cursor: ${props => (props.valid ? "pointer" : null)};
  height: 7.2rem;
  width: 7.2rem;
`
const P = styled.p`
  font-size: ${props => props.theme.fontSize.smallMedium}
`
