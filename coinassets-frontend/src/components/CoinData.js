import { MoneyLayout, CountLayout } from "../utilities/NumsLayout"

export default function CoinData({coin}) {
  return (
    <tr>
        <td>{coin.rank}</td>
        <td>
            <a href={coin.websiteUrl}><img src={coin.icon} alt="coin logo" width="30px" /></a>
                  <span> {coin.name}</span>
        </td>
        <td>{coin.symbol}</td>
        <td>{MoneyLayout(coin.marketCap)}</td>
        <td>{MoneyLayout(coin.price)}</td>
        <td>{CountLayout(coin.availableSupply)}</td>
        {/* <td>{MoneyLayout(coin.volume.toString)}</td> */}
    </tr>
  )
}
