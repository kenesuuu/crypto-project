//7
import React, { useState } from 'react'

import CoinItem from './CoinItem';

const CoinSearch = (props) => {
  const [searchText, setSearchText] = useState('');
  //console.log(props.coins)
  return (
    <div className='rounded-div my-4'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1>Search Crypto</h1>
        <form>
          <input onChange={(e) => setSearchText(e.target.value)} placeholder='Search a coin'/>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.filter((value) => {
            if(searchText ==='') {
              return value
            } else if (
              value.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return value
            }
          }).map((coin) => (
            <CoinItem coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch


{/*for destructuring instead of using props, we can use directly
coins(whatever the variable that you assigned) so that we're 
not going to use props.*/}