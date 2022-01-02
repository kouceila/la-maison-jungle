import { useState } from 'react'
import "../styles/Categories.css"

function Categories({category,updateCategory}) {

    return (
        <div>
            <select value={category} onChange={ (e) => updateCategory(e.target.value)} className="lmj-categories-select"> 
                <option value=''>---</option>
                <option > classique </option>
                <option > extérieur   </option>
                <option > plante grasse </option>
            </select>

            <button onClick={ () => updateCategory("")} >Rénitialiser </button>
        </div>
    )
}

export default Categories