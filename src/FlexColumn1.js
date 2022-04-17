import React from "react";
import styled from "styled-components";
export const FlexColumn1 = ({}) => {
  const CardButtonsFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <FlexColumnRoot>
      <Header>
        <HeaderBackground>
          <Nav>
            <Text1>home</Text1>
            <Text1>history</Text1>
          </Nav>
          <Logo src={"https://file.rendit.io/n/qjYJcC7al9Ff8V5rdvO5.svg"} />
          <Wallet>
            <Text3>SELECT WALLET</Text3>
            <Image1 src={"https://file.rendit.io/n/uSov9Nah2Vx3ahR2AtYF.svg"} />
          </Wallet>
        </HeaderBackground>
        <HeaderLine />
      </Header>
      <Card>
        <CardBackground>
          <CardImages
            src={"https://file.rendit.io/n/8X9hsNk2hmsd5pVv03in.png"}
          />
        </CardBackground>
        <CardButtons onClick={(e) => CardButtonsFunction(e, "CardButtons")}>
          <CardTitle>MINT </CardTitle>
        </CardButtons>
      </Card>
      <Image2 src={"https://file.rendit.io/n/nlIQFwsT7QbXJzqEpRVe.svg"} />
      <Line src={"https://file.rendit.io/n/sD1Z1KtPL5zoRD0tHHR5.svg"} />
    </FlexColumnRoot>
  );
};
const FlexColumnRoot = styled.div`
  height: 2076px;
  background-image: linear-gradient(214deg, #3b1d60 0%, #0f1045 72%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1439px;
  align-items: center;
  padding: 0px 0px 0px 1px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 285px 0px;
`;
const HeaderBackground = styled.div`
  backdrop-filter: blur(6px);
  width: 1273px;
  background-color: rgba(0, 0, 0, 0.52);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 14px 95px 14px 71px;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 18.1px;
  align-items: center;
  margin: 0px 343px 36.4px 0px;
`;
const Logo = styled.img`
  width: 273px;
  height: 94px;
  align-self: center;
  margin: 0px 378px 0px 0px;
`;
const Wallet = styled.div`
  width: 111px;
  height: 34px;
  position: relative;
  margin: 0px 0px 27px 0px;
`;
const Text3 = styled.div`
  text-align: center;
  width: 82.9px;
  height: 18px;
  display: flex;
  font-size: 11px;
  font-family: Dunbar Tall;
  line-height: 13.2px;
  color: #ffffff;
  position: absolute;
  top: 7px;
  left: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image1 = styled.img`
  width: 111px;
  height: 32px;
  position: absolute;
  top: -1px;
`;
const HeaderLine = styled.div`
  width: 1439px;
  height: 3.65px;
  background-color: #ff0000;
`;
const Card = styled.div`
  width: 567px;
  height: 779px;
  position: relative;
  margin: 0px 0px 744px 0px;
`;
const CardBackground = styled.div`
  border-width: 12px;
  border-color: #52a545;
  border-style: solid;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.99);
  width: 459px;
  background-color: #c73333;
  display: flex;
  position: absolute;
  top: -12px;
  left: -12px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 120px;
  padding: 45.95px 42px 47.05px 42px;
`;
const CardImages = styled.img`
  width: 416px;
  height: 450px;
`;
const CardButtons = styled.button`
  border-width: 12px;
  border-color: #53a645;
  border-style: solid;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.77);
  width: 309px;
  height: 62.9px;
  background-color: #00c1ff;
  display: flex;
  position: absolute;
  top: 659.38px;
  left: 96px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 42px;
  padding: 10.35px 9px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const CardTitle = styled.div`
  text-align: center;
  width: 293px;
  height: 62.9px;
  display: flex;
  font-size: 64px;
  font-family: Dunbar Tall;
  line-height: 76.8px;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
`;
const Image2 = styled.img`
  width: 392px;
  height: 45px;
  margin: 0px 0px 21px 0px;
`;
const Line = styled.img`
  width: 1320px;
  height: 3px;
`;
const Text1 = styled.div`
  width: 74.9px;
  height: 14.6px;
  display: flex;
  font-size: 18px;
  font-family: Dunbar Tall;
  line-height: 21.6px;
  color: #990000;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
