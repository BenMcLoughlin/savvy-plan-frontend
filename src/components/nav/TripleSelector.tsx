import React, { FC } from "react"
import styled from "styled-components"

interface IProps {
  user1Name: string
  user2Name: string
  handleChange: (value: string) => void
  value: string
}

/**
 * The <TripleSelector> component contains a list of values: "Income", "Spending", "Taxes" etc. The User can click
 * a value to navigate between pages. The Nav is visible non matter which page is rendered.
 *  */

export const TripleSelector: FC<IProps> = ({ handleChange, value, user1Name, user2Name }) => {
  const selected = value

  const options = ["user1", "combined", "user2"]

  return (
    <Wrapper>
      {options.map((d, i) => (
        <Option key={i} onClick={() => handleChange(d)} selected={selected ? selected === d : i === 0}>
          {" "}
          {/*when it first loads selected is empty, so we set the first value to being selected*/}
          {d === "user1" ? user1Name : d === "user2" ? user2Name : "combined"} {/*we need to display the name, but use user1 or user2 behind the scenes */}
        </Option>
      ))}
      <Pill selected={selected} options={options}></Pill>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  height: 5rem;
  width: 30rem;
  margin: 0px;
  margin-left: 5rem;
  padding: 0px;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  margin: 0 auto;
`
interface OProps {
  selected: boolean
}
interface PProps {
  selected: string
  options: string[]
}
//["income", "savings", "taxes", "spending", 'networth']

const Option = styled.div<OProps>`
  position: relative;
  min-width: 10rem;
  transition: all 2s ease;
  color: ${props => (props.selected ? props.theme.color.ice : "grey")};
  text-align: center;
  z-index: 1;
  transition: all 100ms linear 0s;
  margin: 0px;
  border-radius: 2.5rem;
  text-transform: Capitalize;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.small};
`
const Pill = styled.div<PProps>`
        position: absolute;
        min-width: 10rem;
        height: 3rem;
        top: 1rem;
        left: 0rem;
        background-color: #4F9190;
        transform: ${props =>
          props.selected === props.options[0]
            ? "translate(0rem,0rem)"
            : props => (props.selected === props.options[1] ? "translate(10rem,0rem)" : props => (props.selected === props.options[2] ? "translate(20rem,0rem)" : null))};
        transition: all .3s ease;
        border-radius: 25px;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
}
`
