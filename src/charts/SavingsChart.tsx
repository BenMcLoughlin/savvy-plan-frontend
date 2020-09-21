import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  parent?: string;
}

export const SavingsChart: FC<IProps> = () => {
  return (
    <Wrapper>
      <Img alt="#" src={require("assets/savings.png")} style={{ height: "20rem" }} />
      <ChartNavWrapper>
      </ChartNavWrapper>
    </Wrapper>
  );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70rem;
  position: relative;
`;
const Img = styled.img`
  height: 20rem;
  cursor: pointer;
`

const ChartNavWrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 4rem;
`;

// {/* <ChartNavWrapper>
// <ChartNav options={["tfsa", "rrsp", "nopersonal", "combined"]} id={"selectedAccount"} reducer={"ui_reducer"} />
// </ChartNavWrapper> */}
