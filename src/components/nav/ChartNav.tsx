import React, { FC } from "react"
import styled from "styled-components"

interface IProps {
  // id: string
  // reducer: string
  // state: any
  options: string[]
  handleChange: (value) => void
  value: string
  // set: (id: string, reducer: string, value: any, childId?: string) => void
}

/**
 * The <ChartNavr> component enables the user to display different subjects in the chart. FOr instance their TFSA savings plan, then swith to RRSP.
 *  */

export const ChartNav: FC<IProps> = ({ handleChange, options, value }) => {

  const { length } = options
  return (
    <Wrapper length={length}>
      {options.map((d,i) => (
        <Option key={i} onClick={() => handleChange(d)} selected={value === d}>
          {d}
        </Option>
      ))}
      <Pill selected={value} options={options}></Pill>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

interface IWrapper {
  length: number
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  height: 3rem;
  width: ${props => `${props.length * 9}rem`};
  padding: 2rem;
  margin: 0px;
  margin-left: 5rem;
  padding: 0px;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  margin: 0 auto;
  border-top: 1px solid ${props => props.theme.color.lightGrey};
  border-bottom: 1px solid ${props => props.theme.color.lightGrey};
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
  min-width: 7rem;
  transition: all 2s ease;
  color: ${props => (props.selected ? props.theme.color.ice : props.theme.color.grey)};
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
  font-size: 1.2rem;
`
const Pill = styled.div<PProps>`
        position: absolute;
        min-width: 9rem;
        height: 2.8rem;
        top: 0rem;
        left: 0rem;
        background-color: #73706E;
        transform: ${props =>
          props.selected === props.options[0]
            ? "translate(0rem,0rem)"
            : props =>
                props.selected === props.options[1]
                  ? "translate(9rem,0rem)"
                  : props => (props.selected === props.options[2] ? "translate(18rem,0rem)" : props => (props.selected === props.options[3] ? "translate(27rem,0rem)" : null))};
        transition: all .3s ease;
        border-radius: 0px;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
}
`
