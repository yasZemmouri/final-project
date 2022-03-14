import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const WishBtn = ({coin}) => {
    const {
        addCoinToWatchlist,
        removeCoinFromWatchlist,
        watchlist,
    }=useContext(GlobalContext)
    let x = watchlist.filter(o=>o.id === coin.id);
    console.log('coin.id');
    console.log(coin.id);
    console.log('watchlist');
    console.log(watchlist);
    console.log('x');
    console.log(x);
    const [starColor, setStarColor]=useState(()=>{
        if(x.length> 0){
            return true;
        }else {
            return false;
        }
    });
    console.log('starColor');
    console.log(starColor);
  
  return (
    <button 
    // disabled={watchlistDisabled}
    onClick={() => {
        if(!starColor){
      addCoinToWatchlist(coin);
      setStarColor(!starColor);
        }else{
            removeCoinFromWatchlist(coin.id);
            setStarColor(!starColor);
        }
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
  )
}
