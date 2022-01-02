import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({cart,updateCart}) {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15

    
    const [isOpen, setIsOpen] = useState(false)
    const total =  cart.reduce( 
        (acc,plantType) => acc + plantType.amount * plantType.price, 0
    )

    useEffect(() =>  {document.title = `LMJ : ${total}€ d'achats`}, [total])
    
    return isOpen ?  (
    <div className="lmj-cart">
        <button className ="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}> Fermez le panier </button>
        <h2>Panier</h2>

        {cart.map( ({name,price ,amount },index) =>  (
            <div key={`${name}-${index}`} >
                {name} {price}€ * {amount}
            </div>
        ))}
        <div>
            
        </div>
          <h3> Total : {total}€ </h3>
          <button className="lmj-cart-toggle-button" onClick= {() => updateCart([])}>Vider le panier</button>
          </div>
    ) :
    <div className=" lmj-cart-closed">
         <button className ="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le panier </button>

    </div> 
   
}

export default Cart