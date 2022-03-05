import axios from 'axios';
import { useState, useEffect } from 'react'

export default function Home() {
  const [coinsList, setCoinsList]=useState([]);
  console.log(coinsList);
  useEffect(()=>{
    fetchData()
  }, []);
  const fetchData = async ()=>{
    const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD')
    if(!res.erros) setCoinsList(res.data.coins)
    else setCoinsList([]);
  }
  console.log(coinsList);
  return (
    <main>Home</main>
  )
}
