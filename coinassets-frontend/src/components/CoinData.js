import { MoneyLayout, CountLayout } from "../utilities/NumsLayout";
import {useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { WishBtn } from "./WishBtn";
// import { useContext } from "react";
// import { CoinControls } from './CoinControls'
// import { GlobalContext } from '../context/GlobalState'

export default function CoinData({coin}) {
  // const {
  //   addCoinToWatchlist,
  //   // addCoinToWatched,
  //   watchlist,
  //   // watched,

  // } = useContext(GlobalContext);
  const [starColor, setStarColor]=useState(false);
const { isAuthenticated }=useAuth0();

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
        { isAuthenticated && (
        <td>
          <div className="controls">
            <WishBtn/>
          {/* <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addCoinToWatched(coin)}
          >
            Add to Watched
          </button> */}
        </div>
        </td>
        )}
    </tr>
  )
}
