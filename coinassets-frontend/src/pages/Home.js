import axios from 'axios';
import { useState, useEffect } from 'react';
// import CoinData from '../components/CoinData';
import CoinsTable from '../components/CoinsTable';




export default function Home() {
  const [query, setQuery]=useState('');
  //are you sure it's an array
  const [result, setResult]= useState([])
  const [coinsList, setCoinsList]=useState([]);
  console.log(coinsList);
  useEffect(()=>{
    fetchData()
  }, []);
  const handleChange=(e)=>{
    setQuery(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('searching for ' + query);
  }
  const fetchData = async ()=>{
    const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD')
    if (!res.erros) setCoinsList(res.data.coins) 
    else setCoinsList([]) 
  }
  console.log(coinsList);
  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>
        <form className="d-flex m-2 mx-auto" onSubmit={handleSubmit}>
          <input type="search" id="query" className="form-control me-2" placeholder="Enter coin's name..."
          aria-label="Search"
          onChange={handleChange}
          value={query}/>
          <button id="busqueda" className = "btn btn-outline-primary" type="submit">Search</button>
        </form>
        <CoinsTable coinsList={coinsList}/>
      </div>
    </main>
  )
}

