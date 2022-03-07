import axios from 'axios';
import { useState, useEffect } from 'react';
// import CoinData from '../components/CoinData';
import CoinsTable from '../components/CoinsTable';
// import LogoutButton from '../components/LoginButton';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { Profile } from '../components/Profile';

export default function Home() {
  const [coinsList, setCoinsList]=useState([]);
  console.log(coinsList);
  useEffect(()=>{
    fetchData()
  }, []);
  const fetchData = async ()=>{
    const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD')
    if (!res.erros) setCoinsList(res.data.coins) 
    else setCoinsList([]) 
  }
  console.log(coinsList);
  return (
    <main>
      <div className="container">
        <CoinsTable coinsList={coinsList}/>
      </div>
    </main>
  )
}

