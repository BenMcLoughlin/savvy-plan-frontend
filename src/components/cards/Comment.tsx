import React, { FC } from "react"
import styled from "styled-components"

interface IProps {
  data: any
}

export const Comment: FC<IProps> = ({data}) => {
  const {comment, commentTop, commentLeft} = data

return <Wrapper top={commentTop} left={commentLeft}>
          {comment}
  <Tail></Tail>
  </Wrapper>
}

//---------------------------STYLES-------------------------------------------//

interface IWrapper {
  top: string, 
  left: string
}
const Wrapper = styled.div<IWrapper>`
  height: 8rem;
  width: 20rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  border-radius: 5px;
  position: absolute;
  top: ${props => props.top}rem;
  left:  ${props => props.left}rem;
  padding: 1rem;
  font-size: 1.2rem;

`
const Tail = styled.div`
    clip-path: polygon(4% 0, 0% 100%, 70% 0);
    box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
    background: white;
    top: 3rem;
    left: 2rem;
    height: 8rem;
    width: 8rem;

`

// top: `${props => props.top ? props.top : 0}rem`;
// left: `${props => props.left ? props.left : 0}rem`;