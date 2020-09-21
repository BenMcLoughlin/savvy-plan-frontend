import React from 'react'
import styled from 'styled-components'
import { TwitterWithCircle, FacebookWithCircle, InstagramWithCircle } from '@styled-icons/entypo-social'

export const Footer = () => {
  return (
    <Wrapper>
      <Icons>
        <TwitterWithCircle style={{ height: '3rem' }} />
        <FacebookWithCircle style={{ height: '3rem' }} />
        <InstagramWithCircle style={{ height: '3rem' }} />
      </Icons>
      <Text>Help</Text>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 6.5rem;
  width: 100%;
  background: #617A7C;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  position: relative;
`
const Icons = styled.div`
  height: 100%;
  display: flex;
  width: 15rem;
  justify-content: space-around;
  align-items: center;
  color: white;
`
const Text = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  position: absolute;
  right: 3rem;
  top: 0;
`
