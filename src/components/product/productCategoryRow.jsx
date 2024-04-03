/**
 * @param name
 */

import React from 'react'

export default function ProductCategoryRow({name}) {
  return (

        <tr>
            <td colSpan = {2 }> 
                <strong> {name} </strong>
            </td>
        </tr>

  )
}
