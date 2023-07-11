import React from 'react'


import './OrderStat.css'

function OrderStat({stat}){
    return(
        <div>
             <div className='OderStat'>
            <span className="label">{stat.label}</span>
            <span className="value">{stat.value}</span>
        </div>
        </div>
       
    )
};
export default OrderStat;