import React from 'react'
import CoinSearch from '../components/CoinSearch'

const Home = (props) => {
  return (
    <div>
      <CoinSearch coins={props.coins}/>
    </div>
  )
}

export default Home

{/*for destructuring instead of using props, we can use directly
coins(whatever the variable that you assigned) so that we're 
not going to use props.*/}