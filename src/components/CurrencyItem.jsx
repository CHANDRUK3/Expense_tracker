import React from 'react'

const CurrencyItem = (props) => {
  return (
    <div>
         <div className="current-item">
                <div className='title'>{props.title}</div>
                <div className='amount'>${props.amount < 0 ? props.amount * -1 : props.amount }</div>
        </div>
    </div>
  )
}

export default CurrencyItem