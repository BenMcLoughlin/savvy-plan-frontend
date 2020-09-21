import React, { FC, useState } from "react"
import styled from "styled-components"

interface IProps {
  handleChange(value: string): void
  value: string
}

export const ColorSelect: FC<IProps> = ({ handleChange, value }) => {
  const [open, toggleOpen] = useState<boolean>(false)

  const selectedColor = value
  const colors = ["#c9d0cc", "#7f7f7f", "#536D7A", "#4BB9D0", "#324755", "#ffd152", "#8CB8B7", "#3B7B8E", "#485056", "#F29278", "#F07655", "#4F9190"]

  return (
    <Wrapper onClick={() => toggleOpen(!open)}>
      <Circle color={selectedColor} />
      {open && (
        <DropDown>
          {colors.map((d: string) => {
            return (
              <Square
                selected={false}
                onClick={() => {
                  handleChange(d)
                  toggleOpen(false)
                }}
              >
                <Circle color={d} />
              </Square>
            )
          })}
        </DropDown>
      )}
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 4rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-left: 3rem;
`

interface IColor {
  color: string
}

const Circle = styled.div<IColor>`
  display: flex;
  background: ${props => props.color};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
`
interface ISquare {
  selected: boolean
}

const Square = styled.div<ISquare>`
  width: 6rem;
  padding: 0.4rem;
  height: 4.2rem;
  display: flex;
  justify-content: center;
  background: white;
  border: 0.5px solid #e0dedd;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
    color: white;
  }
`

const DropDown = styled.div`
  position: absolute;
  width: 18rem;
  min-height: 18rem;
  top: 3.8rem;
  left: 0rem;
  background: white;
  z-index: 250;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`
