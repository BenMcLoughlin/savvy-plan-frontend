import React, { FC } from "react"
import styled from "styled-components"
import { ArrowRightS } from "@styled-icons/remix-line"

interface IProps {
  options: string[]
  handleChange: (value) => void
  value: string
}

export const HeaderNav: FC<IProps> = ({ handleChange, value }) => {
  const options = ["product", "pricing", "about",]

  return (
    <Wrapper>
      {options.map((d, i) => (
        <Option key={i} onClick={() => handleChange(d)}>
          {d}
          <Arrow></Arrow>
        </Option>
      ))}
      {/* <Pill selected={value} options={options}></Pill> */}
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 40rem;
  padding: 2rem;
  margin: 0px;
  margin-left: 5rem;
  padding: 0px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 28rem;
  margin: 0 auto;
`
const Arrow = styled(ArrowRightS)`
  margin-top: 0.3rem;
  width: 2rem;
  height: 2rem;
  color: grey;
  transform: rotate(0deg);
  transition: all .2s ease;
`
const Option = styled.div`
  position: relative;
  min-width: 7rem;
  transition: all 2s ease;
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
  font-size: 1.6rem;
  font-weight: 600;
  &:hover ${Arrow} {
    transform: rotate(90deg);
    transition: all .2s ease;
  }
`

// const Pill = styled.div<PProps>`
//         position: absolute;
//         min-width: 9rem;
//         height: 2.8rem;
//         top: 0rem;
//         left: 0rem;
//         background-color: lightGrey;
//         transform: ${props =>
//           props.selected === props.options[0]
//             ? "translate(0rem,0rem)"
//             : props =>
//                 props.selected === props.options[1]
//                   ? "translate(9rem,0rem)"
//                   : props => (props.selected === props.options[2] ? "translate(18rem,0rem)" : props => (props.selected === props.options[3] ? "translate(27rem,0rem)" : null))};
//         transition: all .3s ease;
//         border-radius: 0px;
//         animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
// }
// `
