import { useContext } from "react"
import CoinsTable from "../components/CoinsTable";
import { GlobalContext } from "../context/GlobalState"


export default function Watchlist() {
  const { watchlist }=useContext(GlobalContext);
  console.log(watchlist);
  return (
    <main>
      <div className="container">
        <div className="navix">
        <h1>My Watchlist</h1>
        <span className="count-pill">{watchlist.length} {watchlist.length === 1 ? "coin"
        : "coins"}
        </span>
      </div>
        {watchlist.length> 0 ? (
          <CoinsTable coinsList={watchlist}/>
        ):
        <h2 className="no-coins">No coins in your watchlist! Add some!</h2>
        }
      </div>
    </main>
  )
}
