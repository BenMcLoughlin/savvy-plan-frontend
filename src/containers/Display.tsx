import React, { FC } from "react"
import styled from "styled-components"
import * as components from "components"
import { AddPrompt, InfoCard, SideNav, TripleSelector } from "components"
import { matchThenShowComponent } from "services/display_functions"
import * as I from "types"
import * as charts from "charts"

interface IProps {
  set: I.set
  remove: I.remove
  state: I.state
  data: I.pages
}

export const Display: FC<IProps> = ({ data, remove, set, state }) => {
  const { selectedId } = state.ui_reducer

  const { addPrompt,  chart, editPanel, infoCards, sideNav, tripleSelector } = data

  return (
    <Wrapper>
      <Title>Your Financial Plan</Title>
      <Nav>
        <SideNav {...sideNav} />
      </Nav>
      <Content>
      <Chart>{matchThenShowComponent(charts, data, chart)}</Chart>
        <InfoCards>
          {infoCards.map(d => (
            <InfoCard key={d.label} label={d.label} array={d.array} />
          ))}
        </InfoCards>
        <Edit>
          {selectedId ? (
            matchThenShowComponent(components, data, editPanel)
          ) : (
            <Left>
              <AddPrompt {...addPrompt} />
            </Left>
          )}
        </Edit>
        <CenterNav>{tripleSelector.user2Name && <TripleSelector {...tripleSelector} />}</CenterNav>
      </Content>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 60rem;
  width: 120rem;
  position: relative;
`
const Content = styled.div`
  height: 90rem;
  width: 90rem;
  margin-left: 30rem;
  display: grid;
  grid-template-columns: 80rem 30rem;
  grid-template-rows: 37rem 30rem;
  grid-template-areas:
    "a b"
    "c b";
`

const InfoCards = styled.div`
  grid-area: b;
  height: 50rem;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  flex-wrap: start;
  justify-content: space-around;
`
const Edit = styled.div`
  grid-area: c;
  display: flex;
  justify-content: center;
  width: 85rem;
  height: 10rem;
  margin-top: 1rem;
  margin-left: -5rem;
  position: relative;
`
const CenterNav = styled.h1`
  position: absolute;
  top: 35rem;
  left: 50rem;
  width: 40rem;
  height: 4rem;
`
const Left = styled.h1`
  position: absolute;
  top: 5rem;
  left: 10rem;
`
const Title = styled.h2`
  position: absolute;
  padding: 2rem 0rem 2rem 1rem;
  width: 40rem;
  margin-left: 9rem;
`
const Nav = styled.div`
  position: absolute;
  top: 7rem;
  left: 3rem;
  width: 30rem;
  height: 70rem;
`
const Chart = styled.div`
  grid-area: a;
  display: flex;
  position: relative;
`