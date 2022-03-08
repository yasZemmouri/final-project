import { useContext } from "react"
import CoinsTable from "../components/CoinsTable";
import { GlobalContext } from "../context/GlobalState"


export default function Watchlist() {
  const { watchlist }=useContext(GlobalContext);
  console.log(watchlist);
  return (
    <div className="container">
      <h1>My Watchlist</h1>
      <span>{watchlist.length} {watchlist.length === 1 ? "coin"
      : "coins"}
      </span>
      <CoinsTable coinsList={watchlist}/>
    </div>
  )
}
