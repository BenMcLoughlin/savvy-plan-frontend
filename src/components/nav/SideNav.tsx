import React, { FC} from "react"
import styled from "styled-components"

interface IProps {
  handleChange: (value) => void
  value: string
  options: string[]
}

/**
 * The <SideNav> component contains a list of values: "Income", "Spending", "Taxes" etc. The User can click
 * a value to navigate between pages. The Nav is visible non matter which page is rendered.
 *  */

export const SideNav: FC<IProps> = ({ handleChange, options, value}) => {
 // const selected = state[reducer][id] //enters the reducer and grabs the corrosponding value to show if it is selected or not

  // const options = ["income", "savings", "taxes", "spending", "networth"]

  return (
    <Wrapper>
      {options.map((d, i) => (
        <Option key={i} onClick={() => handleChange(d)} selected={value === d}>
          {d}
        </Option>
      ))}
      <Pill selected={value} options={options}></Pill>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  height: 25rem;
  width: 15rem;
  margin: 0px;
  margin-left: 5rem;
  padding: 0px;
  flex-direction: column;
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
  min-width: 16rem;
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
  font-size: ${props => props.theme.fontSize.smallMedium};
`
const Pill = styled.div<PProps>`
        position: absolute;
        min-width: 13rem;
        height: 4rem;
        top: .6rem;
        left: 1.6rem;
        background-color: #73706E;
        transform: ${props =>
          props.selected === props.options[0]
            ? "translate(0,0rem)"
            : props =>
                props.selected === props.options[1]
                  ? "translate(0,5rem)"
                  : props =>
                      props.selected === props.options[2]
                        ? "translate(0,10rem)"
                        : props => (props.selected === props.options[3] ? "translate(0,15rem)" : props => (props.selected === props.options[4] ? "translate(0,20rem)" : "translateY(0%)"))};
        transition: all .3s ease;
        border-radius: 25px;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
}
`
