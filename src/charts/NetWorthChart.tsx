import React, { FC } from "react"
import styled from "styled-components"

interface IProps {
  state: any
  set: (id: string, reducer: string, value: any, childId?: string) => void
}

export const NetWorthChart: FC<IProps> = ({ state, set }) => {

  //THIS IS JUST A PLACEHODLER FUNCTION FOR NOW
  const instance: any = Object.values(state.main_reducer).filter((d: any) => d.id.includes("Networth"))[0]

  return (
    <Wrapper>
      <Img alt="#" src={require("assets/netWorth.png")} style={{ height: "20rem" }} onClick={() => {
        if (instance) set("selectedId", "ui_reducer", instance.id)
       }}  />
      <ChartNavWrapper>
        {/* <ChartNav options={["Taxes Owing", "Taxes Saved"]} id={"selectedAccount"} reducer={"ui_reducer"} /> */}
      </ChartNavWrapper>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  position: relative;
`
const Img = styled.img`
  height: 20rem;
  cursor: pointer;
`
const ChartNavWrapper = styled.div`
  position: absolute;
  top: 10.5rem;
  left: 4rem;
`
