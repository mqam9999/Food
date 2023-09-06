import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function APIpokemonData() {
    const[num,setNum]=useState();
    const[name,setName]=useState();
    const[moves,setMoves]=useState();
    const[names,setNames]=useState();
    const[moveVal,setmoveVal]=useState();

    useEffect(()=>{
        let API_data = async()=>{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setName(res.data.name)
            setMoves(res.data.moves.length)
            setNames(res.data.moves[0].move.name)
            setmoveVal(res.data.moves[moveVal].move.name)
        }
        API_data();
    })

  return (
    <div className='container-fluid bg-dark'>
    <div className='container p-4 pt-5'>
        <h1 className='bg-warning rounded-pill p-3'>You have selected {num}</h1>
        <h1 className='bg-warning rounded-pill p-3'>Your name is {name}</h1>
        <h1 className='bg-warning rounded-pill p-3'>Your total moves are {moves}</h1>
        <h1 className='bg-warning rounded-pill p-3'>Your move name is {names}</h1>
        <h1 className='bg-warning rounded-pill p-3'>Your move Value is {moveVal}</h1>

      <select className='font btn btn-warning font-size-5 bg-white me-4' value={num} onChange={(e)=>setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <select className='font btn btn-warning bg-white' value={moveVal} onChange={(e)=>setmoveVal(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    </div>
  )
}
