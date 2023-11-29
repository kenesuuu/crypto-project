import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const CoinItem = ({coin}) => {
{/*for destructuring instead of using props, we can use directly
coins(whatever the variable that you assigned) so that we're 
not going to use props.*/}
  return (
    <tr>
        <td><AiOutlineStar /></td>
        <td>{coin.market_cap_rank}</td>
        <td>
        <div>
            <img src={coin.image} alt={coin.id} />
            <p>{coin.name}</p>
        </div>
        </td>
        <td>{coin.symbol}</td>
        <td>{coin.current_price}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{coin.total_volume}</td>
        <td>{coin.market_cap}</td>
        <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color='teal' style={{fill: true}}/>
            <SparklinesSpots />
        </Sparklines>
        </td>
    </tr>
  )
}

export default CoinItem
