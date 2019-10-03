import React from "react";
import styled from "styled-components";

const StyledCoinCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin: auto;
  align-items: center;
  background-color: #e7e7e7;
  box-shadow: 0 0 15px 4px #888888;
  color: #555353;
  height: 80vh;
  margin-top: 6vh;
  border-radius: 10px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    &.coinHeader {
        border-bottom: 1px solid grey;
        margin: 2rem 0;
        h1 {
            font-size: 4rem;
        }
        img {
            padding: 2rem 0;
            width: 40%;
        }
    }
    &.coinInfo {
        p {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            span {
                font-weight: bold;
            }
        }
    }
  }
`;

export default function Coin(props) {
  const { coinData } = props;
  return (
    <StyledCoinCard>
      {console.log(coinData)}
      <div className="coinHeader">
        <h1>{coinData.name}</h1>
        <img src={coinData.image} />
      </div>
      <div className="coinInfo">
        <p><span>Symbol: </span> {coinData.symbol}</p>
        <p><span>Circulating Supply: </span> {coinData.circulating_supply}</p>
        <p><span>Current Price: </span> {coinData.current_price}</p>
        <p><span>Total Supply: </span> {coinData.total_supply}</p>
        <p><span>Total Volume: </span> {coinData.total_volume}</p>
      </div>
    </StyledCoinCard>
  );
}
