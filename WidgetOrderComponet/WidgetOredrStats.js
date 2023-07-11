import React from 'react';
import data from '../JSON/data.json';
import OrderStat from '../OrderStat/OrderStat'
import './widgetOrderStat.css';

function WidgetOrderStatus(){
    return (
        <div className="WidgetOrderStats">
    {data.map((stat , index)=>(
        <OrderStat key={index} stat={stat} />
    ))}
        </div>
    )
}

export default WidgetOrderStatus;


