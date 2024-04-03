
import React from 'react'

export default function ProductRow({product}) {
  
    const style = product.stocked? undefined : {color:'red'}
  
    return (

        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
      
  )
}