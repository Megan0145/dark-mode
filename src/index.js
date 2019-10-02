import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Coin from './components/Coin';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [bitCoinData, setBitcoinData] = useState([]);
  const coinDataPromise =axios.get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
  const bitcoinPromise = axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false');

  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
    //   )
    //   .then(res => setCoinData(res.data))
    //   .catch(err => console.log(err));
    Promise.all([coinDataPromise, bitcoinPromise]).then(
      ([coinRes, bitcoinRes]) => {
       setCoinData(coinRes.data); 
       setBitcoinData(bitcoinRes.data);
      }
    ).catch(error => console.log(error))

  }, []);
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path='/' render={() => <Charts coinData={coinData} />} />
      <Route exact path='/bitcoin' render={() => <Coin bitCoinData={bitCoinData} />} />
    </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
