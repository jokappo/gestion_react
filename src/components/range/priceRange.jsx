import React from 'react'
import { useState } from 'react'

export default function PriceRangeInput({onPriceChange}) {
  
    const [ranger, setranger] = useState(0)

    //gestion des changements dans le input:
    const  handlePriceChange = (e)=>{ 
        let val= parseFloat(e.target.value);
        if (!isNaN(val)) {
            setranger(parseFloat(val));
            onPriceChange && onPriceChange(parseFloat(val), "price");
        } else console.log("Erreur de saisie")     
      };

    return (
    <>
      <input
        className='appearance-none w-full bg-gray-200 h-1 rounded-full outline-none focus:outline-none'
        type="range"
        name=""
        id=""
        min={0}
        max={10}
        step={0.01}
        value={ranger}
        onChange={handlePriceChange} />
    </>
  )
}
