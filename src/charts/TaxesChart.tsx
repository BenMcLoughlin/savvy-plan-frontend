import React, { FC } from "react"
import styled from "styled-components"
import { ChartNav } from "components"

interface IProps {
  state: any
  set: (id: string, reducer: string, value: any, childId?: string) => void
}

export const TaxesChart: FC<IProps> = ({ state, set }) => {
  return (
    <Wrapper>
      <Img alt="#" src={require("assets/taxes.png")} style={{ height: "20rem" }} onClick={() => set("selectedId", "ui_reducer", "incomeDummy")} />
      <ChartNavWrapper>
      <ChartNav options={["Taxes Owing", "Taxes Saved"]} handleChange={(value) => set("selectedAccount", "ui_reducer", value)} value={state.ui_reducer.selectedAccount}/>
      </ChartNavWrapper>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
