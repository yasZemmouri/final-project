import React from 'react'

export default function CoinData({coin}) {
    console.log('coinsData list: ');
    console.log(coin);
  return (
    <tr>
        <td>{coin.rank}</td>
        <td>
            <a href={coin.websiteUrl}><img src={coin.icon} alt="coin logo" width="30px" /></a>
                  <span> {coin.name}</span>
        </td>
        <td>{coin.symbol}</td>
        <td>{coin.marketCap}</td>
        <td>{coin.price}</td>
        <td>{coin.availableSupply}</td>
        <td>{coin.volume}</td>
    </tr>
  )
}
