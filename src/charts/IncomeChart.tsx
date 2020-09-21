import React, { FC,  } from "react"
import styled from "styled-components"
import { ChartNav } from "components"


interface IProps {
  set: (id: string, reducer: string, value: any, childId?: string) => void
}

export const IncomeChart: FC<IProps> = () => {

  return (
    <Wrapper>
     <Img alt="#" src={require("assets/lifetimeIncome.png")} style={{ height: "20rem" }}/>
      <ChartNavWrapper>
        <ChartNav options={["before tax", "after tax"]}  handleChange={() => null}  value="before tax"/>
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
  width: 90rem;
  height: 20rem;
  margin-top: 14rem;
`
const Img = styled.img`
  height: 20rem;
  cursor: pointer;
`

const ChartNavWrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 4rem;
`
