import React from 'react'

export default function CurrencyROw(props) {
    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    }=props
    return (
        <div>
           <input type="number" className="input-succ" value={amount} onChange={onChangeAmount}/>
           <select className="succ-sel1" value={selectedCurrency} onChange={onChangeCurrency}>
           {currencyOptions.map(option => (
            <option className="succ-sel"key={option} value={option}>{option}</option>
           ))}
               
           </select>
           
        </div>
    )
}
