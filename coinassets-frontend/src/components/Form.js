import { useState } from 'react'
import axios from 'axios'

export const Form = () => {
  const [query, setQuery]=useState('')
  const [result, setResult]=useState({})

  const handleChange=(e)=>{
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(query){
      console.log('searching for ' + query);
      try{
        const res = await axios.get(`https://api.coinstats.app/public/v1/coins/${query.trim().toLowerCase().replace(' ', '-')}?currency=USD`)
        console.log(res);
        setResult(res.data.coin);

      }catch(err){
        console.log(err);
      }
    }
  }


  return (
    <form className="d-flex m-2 mx-auto justify-content-center my-4" onSubmit={handleSubmit}>
    <input type="search" id="query" className="form-control me-2 " placeholder="Enter coin's name..."
    aria-label="Search"
    onChange={handleChange}
    value={query}/>
    <button id="busqueda" className = "btn btn-outline-primary" type="submit">Search</button>
  </form>
  )
}
