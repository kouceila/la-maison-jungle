import { map } from 'bluebird'
import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'



function ShoppingList({cart,updateCart}) {
    
    const [category,updateCategory] = useState("")

    const categories = plantList.reduce(
        (acc,plant) => acc.includes(plant.category) ? acc: acc.concat(plant.category), []
    )

    
    
    function addToCart(name,price){
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded){
            const cartFiltredCurrentPlant = filter(cart,name)
            //const cartFiltredCurrentPlant = cart.filtrer( plant => plant.name !== name )
            updateCart([...cartFiltredCurrentPlant,{name,price,amount:currentPlantAdded.amount+1}])
        }
        else{
            updateCart([...cart,{name,price,amount:1}])
        }

    }

    function filter(myArray, name){
        let newArr = [] 
        for ( let i=0 ; i < myArray.length;i++){
            if ( myArray[i].name!== name ){
                newArr.push(myArray[i])
            }
        }
        return newArr
    }



    return (
        <div className="lmj-shopping-list"> 
            <Categories category={category} updateCategory={updateCategory}/>

            <ul className='lmj-plant-list'>
                {plantList.map((plant) => ( !category || category === plant.category ? ( 
                <div key={plant.id} >
                        < PlantItem name={plant.name} cover = {plant.cover} id = {plant.id} light={ plant.light} water = {plant.water } />
                        <button onClick={() => addToCart(plant.name,plant.price)}>Ajouter au panier</button>
                </div> ) : null
                                       
                ))}
            </ul>
            
        </div>
    )
}



export default ShoppingList