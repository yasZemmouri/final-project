import axios from 'axios';
import { useState, useEffect } from 'react';
// import CoinData from '../components/CoinData';
import CoinsTable from '../components/CoinsTable';
import { Form } from '../components/Form';

export default function Home() {
  const [query, setQuery]=useState('');
  //are you sure it's an array
  const [result, setResult]= useState({})
  const [coinsList, setCoinsList]=useState([]);
  console.log(coinsList);
  useEffect(()=>{
    fetchData()
  }, []);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(query){
      console.log('searching for ' + query);
      try{
        axios.get(`https://api.coinstats.app/public/v1/coins/${query.trim().toLowerCase().replace(' ', '-')}?currency=USD`)
        .then(res=>{
          const data = res.data.coin;
          setResult(data);
          console.log(result);

        })
      }catch(err){
        console.log(err)
      }   
    }
    setQuery('');
  }
  const fetchData = async ()=>{
    try{
      const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&curreny=USD')
      setCoinsList(res.data.coins)
    }catch(err){
      console.log(err);
    }
  }
  console.log(coinsList);
  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>
        <Form/>
    
        <CoinsTable coinsList={coinsList}/>
      </div>
    </main>
  )
}

