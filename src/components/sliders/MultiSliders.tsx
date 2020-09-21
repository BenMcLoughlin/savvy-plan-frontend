import React, { FC } from "react"
import styled from "styled-components"
import { Slider } from "components"
import _ from "lodash"

interface ISliderProps {
  state: any
  props: any
  num: number
}

export const MultiSliders: FC<ISliderProps> = props => {
  const { num } = props //the num tells the component how many sliders to render

  return (
    <Wrapper>
      {_.range(1, num + 1).map((d, i:number) => {
        //creates an array of numbers from 1 to the number which we map through to render sliders
        return <Slider key={i} {...props[`slider${d}`]} />
      })}
    </Wrapper>
  )
}

//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
  position: relative;
  width: 64rem;
  height: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// This is the entire rangebar wrapper that contains the label, the range bar input and the value output.
