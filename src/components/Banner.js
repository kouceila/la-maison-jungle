import '../styles/Banner.css'
import logo from '../assets/logo.png'
import NavBar from './NavBar';
function Banner (){

    const currentMonth = new Date() .getMonth;
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    const recommendation = isSpring ? "n est le moment de rempoter " : "ce n est pas le moment de rempoter ";

    const titre = "La maison jungle"
    return (
    <div className="lmj-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
         <h1 className="lmj-title"> {titre} </h1>
         {/*<div className="lmj-recommendation">{recommendation} </div>*/}
         
    </div>
   

    )
}

export default Banner