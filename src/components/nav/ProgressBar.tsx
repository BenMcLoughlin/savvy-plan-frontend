import React, { FC } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

interface IProps {
  progress: number
  length: number
}

export const ProgressBar: FC<IProps> = ({ progress, length }) => {
  let squares = _.range(progress)
  return (
    <Wrapper>
      {squares.map((d) => (
        <Square length={length} key={d} />
      ))}
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  height: 0.5rem;
  width: 100%;
  background: #eae2e2;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  display: flex;
`
interface ISquare {
  length: number
}

const Square = styled.div<ISquare>`
  height: 0.5rem;
  width: 4rem;
  background: #9ac0cd;
`
//width: ${(props) => `${(1 / props.length) * 145}rem`};