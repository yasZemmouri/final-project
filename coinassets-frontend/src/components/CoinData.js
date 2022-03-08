import { MoneyLayout, CountLayout } from "../utilities/NumsLayout";
import {useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
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
          <button 
       
            // disabled={watchlistDisabled}
            onClick={() => {
              // addCoinToWatchlist(coin)
              setStarColor(!starColor);
              }
            }
          >
            {
              !starColor ? <svg hight="23" width="24" viewBox="0 0 24 23" filled="1" fill="none" focusable="false" aria-hidden='true' >
                <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z" >
                </path>
              </svg>:
              <svg className="star-color" hight="23" width="24" viewBox="0 0 24 23" filled="1" fill="none" focusable="false" aria-hidden='true' >
                <path d="M12.713 1.443l2.969 6.015 6.637.965a.794.794 0 01.44 1.354l-4.804 4.681 1.135 6.612a.794.794 0 01-1.152.837L12 18.787l-5.938 3.121a.795.795 0 01-1.152-.838l1.134-6.612L1.24 9.777a.794.794 0 01.44-1.354l6.638-.965 2.968-6.015a.795.795 0 011.425 0z" >
                </path>
               </svg>
            }
          </button>

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
