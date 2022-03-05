import CoinData from "./CoinData";

export default function CoinsTable({coinsList}) {
    console.log('coinsTable list: ');
    console.log(coinsList);
  return (
    <div>
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Available Supply</th>
            <th>Volume 24hrs</th>
            <th>Watch</th>
          </tr>
        </thead>
        <tbody>
            {coinsList.map((coin)=>{
              return(
                //the unique key should be in the map function.
                <CoinData coin={coin} key={coin.id}/>
              )
            }  
          )
          }
        </tbody>      
      </table>
    </div>
  )
}
