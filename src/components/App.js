import Banner from './Banner';
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Search from './search';
//import Cart from './Cart';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
function App() {

  /*const [cart,updateCart] = useState([])*/
  const [isFooterShown, updateIsFooterShown] = useState(true)

  useEffect(() => {
    return () => console.log(`Alerte qui s'affiche quand le fotter est cacher`) }
  )
  
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  
  return (


        <div>
          <NavBar />
          <Banner />
          <LoginForm />
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
          {/*<QuestionForm /> */ }
          <Button variant="success" onClick={() => updateIsFooterShown(false) } >Cacher Footer</Button>
          {isFooterShown && <Footer  />}
          {/*console.log(cart)*/}

       </div>
        )
}

export default App;
