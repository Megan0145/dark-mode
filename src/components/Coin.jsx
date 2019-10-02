import React from 'react';

export default function Coin(props) {
    const { bitCoinData } = props;
    return (
        <div>
            <h1>{bitCoinData.name}</h1>
            <h2>{bitCoinData.categories}</h2>
            {/* <p>{bitCoinData.description}</p> */}
            {/* <a src={bitCoinData.links.homepage}>Site</a> */}
        </div>
    );
}